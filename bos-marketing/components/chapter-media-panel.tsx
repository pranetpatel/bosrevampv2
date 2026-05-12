import Image from "next/image";

type ChapterMediaPanelProps = {
  src: string;
  alt: string;
  /** Tailwind aspect ratio utilities */
  aspectClassName?: string;
  className?: string;
  priority?: boolean;
  /**
   * "contained" (default) — rounded card with border.
   * "edge-fade" — no border/radius; vignette dissolves into dark shell.
   */
  variant?: "contained" | "edge-fade";
};

export function ChapterMediaPanel({
  src,
  alt,
  aspectClassName = "aspect-[16/10] md:aspect-[21/9]",
  className = "",
  priority = false,
  variant = "contained",
}: ChapterMediaPanelProps) {
  const isEdge = variant === "edge-fade";

  return (
    <div
      className={[
        "relative w-full overflow-hidden",
        isEdge
          ? "rounded-none"
          : "rounded-2xl border border-white/10 bg-[var(--surface-raised)] shadow-[0_20px_60px_rgba(0,0,0,0.45)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`relative w-full ${aspectClassName}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1536px) 92vw, 1440px"
          quality={92}
          priority={priority}
        />
        {/* Edge vignette — fades image into the dark shell (#0a0a0a) */}
        <div className="panel-vignette pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      </div>
    </div>
  );
}
