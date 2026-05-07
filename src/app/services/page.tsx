import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal, ScrollFade, StaggerList, StaggerItem } from "@/components/Animated";

export const metadata: Metadata = {
  title: "Services",
  description:
    "educaiの事業内容。自社アプリ開発、受託開発、AI研修の3つのサービスをご紹介します。",
};

const services = [
  {
    id: "app",
    number: "01",
    title: "自社アプリ開発",
    description:
      "教育領域に特化したAI活用アプリを自社開発。学ぶ人と教える人、双方の体験を改善します。",
    items: [
      "教育向けAIアプリ",
      "個別最適な学習支援",
      "教師・教育事業者の業務支援",
      "学習体験の改善",
    ],
  },
  {
    id: "contract",
    number: "02",
    title: "受託開発",
    description:
      "ビジネス課題に合わせたシステム開発・AI導入を、要件定義からリリースまで一貫してサポートします。",
    items: [
      "Webアプリ開発",
      "業務システム開発",
      "AI機能の導入支援",
      "MVP / プロトタイプ開発",
    ],
  },
  {
    id: "training",
    number: "03",
    title: "AI研修",
    description:
      "最新のAI開発ツールの使い方から実務ワークフローまで、ハンズオン形式で習得できる研修を提供します。",
    items: [
      "Codex / Antigravity",
      "Claude Code",
      "AI開発ワークフロー",
      "Git / GitHub連携",
      "実務ハンズオン",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page header */}
        <div className="border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="py-14 md:py-20">
              <h1 className="text-6xl md:text-8xl font-extrabold text-zinc-950 tracking-tight leading-none">
                <Reveal delay={0.1}>Services</Reveal>
              </h1>
              <p className="text-sm text-zinc-600 mt-4 tracking-wider">事業内容</p>
            </div>
          </div>
        </div>

        {/* Services */}
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="border-b border-zinc-200"
          >
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
              <ScrollFade>
                <div className="grid md:grid-cols-[160px_1fr] gap-10 md:gap-20">
                  {/* Left */}
                  <div className="flex md:flex-col gap-4 md:gap-3">
                    <span className="text-xs text-zinc-300 font-medium tracking-widest">
                      {service.number}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                      {service.title}
                    </h2>
                  </div>

                  {/* Right */}
                  <div>
                    <p className="text-sm text-zinc-700 leading-relaxed mb-10 max-w-lg">
                      {service.description}
                    </p>
                    <StaggerList>
                      {service.items.map((item) => (
                        <StaggerItem key={item}>
                          <div className="flex items-center gap-4 text-sm text-zinc-700 py-2">
                            <span className="w-5 h-px bg-cyan-500 flex-shrink-0" />
                            {item}
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerList>
                  </div>
                </div>
              </ScrollFade>
            </div>
          </section>
        ))}

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
