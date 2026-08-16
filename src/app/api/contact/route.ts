import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  formType?: unknown;
  name?: unknown;
  contact?: unknown;
  role?: unknown;
  schedule?: unknown;
  details?: unknown;
  work?: unknown;
  experience?: unknown;
  availability?: unknown;
};

type ContactField = {
  key: keyof ContactPayload;
  label: string;
  required?: boolean;
  maxLength: number;
};

const EMPLOYER_FIELDS: ContactField[] = [
  { key: "name", label: "Name", required: true, maxLength: 160 },
  { key: "contact", label: "Phone or email", required: true, maxLength: 200 },
  {
    key: "role",
    label: "Type of worker needed",
    required: true,
    maxLength: 240,
  },
  { key: "schedule", label: "Schedule", required: true, maxLength: 240 },
  { key: "details", label: "Notes", maxLength: 1200 },
];

const APPLICANT_FIELDS: ContactField[] = [
  { key: "name", label: "Name", required: true, maxLength: 160 },
  { key: "contact", label: "Phone or email", required: true, maxLength: 200 },
  { key: "work", label: "Work wanted", required: true, maxLength: 240 },
  { key: "experience", label: "Experience", maxLength: 1200 },
  { key: "availability", label: "Availability", maxLength: 240 },
];

const SHEET_CONFIG = {
  employer: {
    range: "'Employer Requests'!A:F",
    fields: EMPLOYER_FIELDS,
  },
  applicant: {
    range: "'Job Seeker Requests'!A:F",
    fields: APPLICANT_FIELDS,
  },
} as const;

function asCleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload: ContactPayload) {
  const formType = asCleanString(payload.formType);

  if (formType !== "employer" && formType !== "applicant") {
    return {
      errors: ["Choose either the employer or job seeker form."],
      values: [],
      range: "",
    };
  }

  const config = SHEET_CONFIG[formType];
  const errors: string[] = [];
  const values = config.fields.map((field) => {
    const value = asCleanString(payload[field.key]);

    if (field.required && !value) {
      errors.push(`${field.label} is required.`);
    }

    if (value.length > field.maxLength) {
      errors.push(`${field.label} must be ${field.maxLength} characters or less.`);
    }

    return value;
  });

  return {
    errors,
    values,
    range: config.range,
  };
}

function getSheetsClient() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );

  if (!spreadsheetId || !clientEmail || !privateKey) {
    throw new Error("Missing Google Sheets environment variables.");
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return {
    sheets: google.sheets({ version: "v4", auth }),
    spreadsheetId,
  };
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, errors: ["Send the form as valid JSON."] },
      { status: 400 },
    );
  }

  const validation = validatePayload(payload);

  if (validation.errors.length > 0) {
    return NextResponse.json(
      { ok: false, errors: validation.errors },
      { status: 400 },
    );
  }

  try {
    const { sheets, spreadsheetId } = getSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: validation.range,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[new Date().toISOString(), ...validation.values]],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Google Sheets contact append failed", error);

    return NextResponse.json(
      {
        ok: false,
        errors: ["We could not send your request right now. Please try again."],
      },
      { status: 500 },
    );
  }
}
