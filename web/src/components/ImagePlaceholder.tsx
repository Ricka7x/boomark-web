import { Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";

export default function ImagePlaceholder({
  label,
  className = "",
  tone = "day",
}: {
  label: string;
  className?: string;
  tone?: "day" | "night";
}) {
  const isNight = tone === "night";

  return (
    <div
      className={`flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed ${
        isNight ? "border-night-border bg-night-surface" : "border-border bg-surface"
      } ${className}`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full border ${
          isNight ? "border-night-border bg-night" : "border-border bg-background"
        }`}
      >
        <ImageIcon
          size={20}
          weight="bold"
          className={isNight ? "text-night-foreground/50" : "text-muted"}
          aria-hidden="true"
        />
      </div>
      <div className={`font-mono text-xs ${isNight ? "text-night-foreground/50" : "text-muted"}`}>
        Image placeholder
      </div>
      <div
        className={`max-w-56 px-6 text-center text-sm ${
          isNight ? "text-night-foreground/50" : "text-muted"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
