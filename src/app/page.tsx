import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Reveal,
  FadeUp,
  ScrollFade,
  StaggerList,
  StaggerItem,
} from "@/components/Animated";

const services = [
  {
    number: "01",
    title: "自社アプリ開発",
    subtitle: "教育向けAIアプリ · 学習支援 · 業務効率化",
    href: "/services#app",
  },
  {
    number: "02",
    title: "受託開発",
    subtitle: "Webアプリ · 業務システム · AI機能導入",
    href: "/services#contract",
  },
  {
    number: "03",
    title: "AI研修",
    subtitle: "Claude Code · Codex · 実務ハンズオン",
    href: "/services#training",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            {/* Headline — clip reveal per line */}
            <div className="py-16 md:py-28 lg:py-36">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-zinc-950 leading-[0.95] tracking-tight">
                <Reveal delay={0.1}>教育とAIで、</Reveal>
                <Reveal delay={0.22}>学びと事業の</Reveal>
                <Reveal delay={0.34}>
                  <span className="text-cyan-600">可能性を広げる。</span>
                </Reveal>
              </h1>
            </div>

            {/* Description + CTAs */}
            <FadeUp delay={0.58}>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 md:pb-20 border-t border-zinc-200 pt-8">
                <p className="text-sm text-zinc-700 leading-relaxed max-w-sm md:max-w-xs">
                  educaiは、自社アプリ開発、受託開発、AI研修を行うテクノロジーカンパニーです。
                </p>
                <div className="flex items-center gap-5">
                  <Link
                    href="/contact"
                    className="text-xs tracking-widest uppercase font-medium border border-zinc-950 px-5 py-2.5 hover:bg-zinc-950 hover:text-white transition-colors whitespace-nowrap"
                  >
                    お問い合わせ →
                  </Link>
                  <Link
                    href="/services"
                    className="text-xs tracking-widest uppercase font-medium text-zinc-400 hover:text-zinc-950 transition-colors whitespace-nowrap"
                  >
                    事業内容
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Services preview ────────────────────────────────── */}
        <section>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <ScrollFade>
              <div className="py-3 border-b border-zinc-200">
                <span className="text-xs text-zinc-400 tracking-widest uppercase">
                  Services
                </span>
              </div>
            </ScrollFade>

            <StaggerList>
              {services.map((service, i) => (
                <StaggerItem
                  key={service.number}
                  className={`border-b border-zinc-200 -mx-6 md:-mx-10 ${
                    i === 0 ? "border-t" : ""
                  }`}
                >
                  <Link
                    href={service.href}
                    className="flex items-center justify-between py-7 px-6 md:px-10 group hover:bg-zinc-50 transition-colors"
                  >
                    <div className="flex items-baseline gap-6 md:gap-10 min-w-0">
                      <span className="text-xs text-zinc-300 font-medium tabular-nums flex-shrink-0">
                        {service.number}
                      </span>
                      <div className="min-w-0">
                        <p className="text-lg md:text-xl font-semibold text-zinc-950 group-hover:text-cyan-600 transition-colors">
                          {service.title}
                        </p>
                        <p className="text-xs text-zinc-500 mt-0.5">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-zinc-300 group-hover:text-cyan-600 transition-colors flex-shrink-0 ml-4"
                    />
                  </Link>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </section>

        {/* ── Mission ─────────────────────────────────────────── */}
        <section className="border-t border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
            <ScrollFade>
              <div className="grid md:grid-cols-[160px_1fr] gap-10 md:gap-20 items-start">
                <p className="text-xs text-zinc-400 tracking-widest uppercase pt-1">
                  Mission
                </p>
                <div>
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-950 leading-snug tracking-tight">
                    AIの力で、学ぶ人と教える人の
                    <br className="hidden sm:block" />
                    可能性を広げる。
                  </blockquote>
                  <div className="mt-10">
                    <Link
                      href="/about"
                      className="text-xs tracking-widest uppercase font-medium text-zinc-950 border-b border-zinc-400 pb-0.5 hover:border-cyan-600 hover:text-cyan-600 transition-colors"
                    >
                      About educai →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
