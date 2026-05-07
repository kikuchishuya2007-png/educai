import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            href="/"
            className="text-sm font-bold tracking-tight"
            aria-label="educai — ホーム"
          >
            <span className="text-zinc-950">educ</span>
            <span className="text-cyan-600">ai</span>
          </Link>

          <nav
            className="flex flex-wrap gap-x-8 gap-y-2"
            aria-label="フッターナビゲーション"
          >
            {(
              [
                ["/services", "Services"],
                ["/about", "About"],
                ["/contact", "Contact"],
              ] as const
            ).map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-xs tracking-widest uppercase text-zinc-400 hover:text-zinc-950 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <p className="text-xs text-zinc-400">© 2026 educai</p>
        </div>
      </div>
    </footer>
  );
}
