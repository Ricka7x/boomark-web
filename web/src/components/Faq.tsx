const QUESTIONS = [
  {
    q: "Is Boomark a subscription?",
    a: "No. It's $7, once. No recurring charge, no tiers to upgrade into later.",
  },
  {
    q: "Does the browser extension cost extra?",
    a: "No. The Mac app, the extension, and the iOS app are all part of the same $7 purchase.",
  },
  {
    q: "Which browsers does the extension work with?",
    a: "Any of them. It adds the page you're on to Boomark without making you leave the tab.",
  },
  {
    q: "What happens to a pinned bookmark if I reassign its shortcut?",
    a: "It stays pinned. Pinning and the ⌘1–⌘5 shortcuts are tracked separately, so reassigning one doesn't touch the other.",
  },
  {
    q: "What do I need to run it?",
    a: "A Mac on macOS 13 or later. The iOS app mirrors the same list once you're set up.",
  },
] as const;

export default function Faq() {
  return (
    <section className="bg-night py-(--space-3xl)">
      <div className="mx-auto max-w-3xl px-6">
        <header className="pb-(--space-xl) text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-night-foreground sm:text-4xl">
            Questions, answered.
          </h2>
        </header>

        <div className="divide-y divide-night-border border-t border-b border-night-border">
          {QUESTIONS.map((item) => (
            <div key={item.q} className="py-6">
              <h3 className="text-base font-semibold tracking-tight text-night-foreground">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-night-foreground/60">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
