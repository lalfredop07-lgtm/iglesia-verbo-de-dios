import { SmartImage } from "./SmartImage";
import { cx } from "@/lib/utils";

interface FigureProps {
  src: string;
  alt: string;
  sizes: string;
  focus?: string;
  focusMobile?: string;
  priority?: boolean;
  className?: string;
  /** Capa azul para asegurar contraste cuando hay texto encima. */
  overlay?: "none" | "soft" | "strong" | "bottom";
  rounded?: boolean;
  children?: React.ReactNode;
}

const overlays = {
  none: "",
  soft: "bg-night/25",
  strong: "bg-night/55",
  bottom: "bg-gradient-to-t from-night/85 via-night/25 to-transparent",
} as const;

export function Figure({
  src,
  alt,
  sizes,
  focus,
  focusMobile,
  priority,
  className,
  overlay = "none",
  rounded = true,
  children,
}: FigureProps) {
  return (
    <div
      className={cx(
        "relative overflow-hidden bg-mist",
        rounded && "rounded-[20px]",
        className,
      )}
    >
      <div className="media-zoom absolute inset-0">
        <SmartImage
          src={src}
          alt={alt}
          sizes={sizes}
          focus={focus}
          focusMobile={focusMobile}
          priority={priority}
        />
      </div>
      {overlay !== "none" ? (
        <div aria-hidden className={cx("absolute inset-0", overlays[overlay])} />
      ) : null}
      {children}
    </div>
  );
}
