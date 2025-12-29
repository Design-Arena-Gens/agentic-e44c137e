type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-xl text-base text-white/70 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
