import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal, ScrollFade } from "@/components/Animated";

export const metadata: Metadata = {
  title: "Company",
  description: "educaiの会社概要。設立、代表者、所在地、事業内容など。",
};

const profile = [
  { label: "会社名", value: "educai" },
  { label: "代表者", value: "菊池秀弥" },
  { label: "設立", value: "2026年" },
  { label: "所在地", value: "東京都" },
  {
    label: "事業内容",
    value: "自社アプリ開発 / 受託開発 / AI研修",
  },
  { label: "メール", value: "contact@educai.jp", isEmail: true },
];

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page header */}
        <div className="border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="py-14 md:py-20">
              <h1 className="text-6xl md:text-8xl font-extrabold text-zinc-950 tracking-tight leading-none">
                <Reveal delay={0.1}>Company</Reveal>
              </h1>
              <p className="text-sm text-zinc-600 mt-4 tracking-wider">
                会社概要
              </p>
            </div>
          </div>
        </div>

        {/* Profile table */}
        <section className="border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
            <ScrollFade>
              <div className="grid md:grid-cols-[160px_1fr] gap-10 md:gap-20 items-start">
                <p className="text-xs text-zinc-400 tracking-widest uppercase pt-1">
                  Profile
                </p>
                <dl className="divide-y divide-zinc-100">
                  {profile.map((row) => (
                    <div
                      key={row.label}
                      className="grid sm:grid-cols-[180px_1fr] gap-4 py-5"
                    >
                      <dt className="text-xs text-zinc-400 tracking-widest uppercase pt-0.5">
                        {row.label}
                      </dt>
                      <dd className="text-sm text-zinc-800">
                        {row.isEmail ? (
                          <a
                            href={`mailto:${row.value}`}
                            className="text-cyan-600 hover:text-cyan-700 transition-colors border-b border-cyan-200 pb-0.5"
                          >
                            {row.value}
                          </a>
                        ) : (
                          row.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* CTA strip */}
        <ScrollFade>
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="text-sm text-zinc-700">ご相談・お問い合わせはこちら</p>
              <Link
                href="/contact"
                className="text-xs tracking-widest uppercase font-medium border border-zinc-950 px-5 py-2.5 hover:bg-zinc-950 hover:text-white transition-colors whitespace-nowrap"
              >
                お問い合わせ →
              </Link>
            </div>
          </div>
        </ScrollFade>
      </main>
      <Footer />
    </>
  );
}
