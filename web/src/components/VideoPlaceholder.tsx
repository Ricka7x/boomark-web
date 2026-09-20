import { Play } from "@phosphor-icons/react/dist/ssr";

export default function VideoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-surface ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background">
        <Play size={22} weight="fill" className="text-muted" aria-hidden="true" />
      </div>
      <div className="font-mono text-xs text-muted">Video placeholder</div>
      <div className="max-w-sm px-6 text-center text-sm text-muted">{label}</div>
    </div>
  );
}
