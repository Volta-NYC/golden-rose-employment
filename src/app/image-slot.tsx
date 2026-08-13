/* eslint-disable @next/next/no-img-element */

/* Image positions come in two states. Where one of the client's own photos
   honestly fits the slot, <Photo /> renders it. Everywhere else -- domestic
   placements above all, for which she has sent nothing -- <ImageSlot /> renders a
   labelled empty rectangle rather than a stand-in that misrepresents the work. */

export function ImageSlot({
  className,
  label = "Image goes here",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      aria-label={label}
      className={className ? `img-placeholder ${className}` : "img-placeholder"}
      role="img"
    >
      {label}
    </div>
  );
}

export function Photo({
  alt,
  className,
  objectPosition,
  src,
}: {
  alt: string;
  className?: string;
  objectPosition?: string;
  src?: string;
}) {
  if (!src) {
    return <ImageSlot className={className} label={alt || "Image goes here"} />;
  }

  return (
    <img alt={alt} className={className} src={src} style={{ objectPosition }} />
  );
}

export function PapelPicado() {
  return <div aria-hidden="true" className="papel-picado" />;
}

/* A band of one of her Andean textiles, used as a section rule. Framed to the
   lower part of the frame so the vendor at the top of the shot stays out. */
export function TextileBand({ src }: { src: string }) {
  return <div aria-hidden="true" className="textile-band" style={{ backgroundImage: `url("${src}")` }} />;
}
