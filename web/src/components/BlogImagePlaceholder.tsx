export default function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="my-8 rounded-xl border-2 border-dashed border-black/15 bg-black/3 p-12 text-center">
      <div className="text-zinc-400 text-sm font-mono mb-2">Image placeholder</div>
      <div className="text-zinc-500 text-sm">{label}</div>
    </div>
  );
}
