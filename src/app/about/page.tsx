import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal, ScrollFade, StaggerList, StaggerItem } from "@/components/Animated";

export const metadata: Metadata = {
  title: "About",
  description:
    "educaiについて。AI技術と教育領域の知見を掛け合わせ、企業や教育現場の課題解決に取り組むテクノロジーカンパニーです。",
};

const Row = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <section className="border-b border-zinc-200">
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="grid md:grid-cols-[160px_1fr] gap-10 md:gap-20 items-start">
        <p className="text-xs text-zinc-400 tracking-widest uppercase pt-1">
          {label}
        </p>
        <div>{children}</div>
      </div>
    </div>
  </section>
);

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page header */}
        <div className="border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="py-14 md:py-20">
              <h1 className="text-6xl md:text-8xl font-extrabold text-zinc-950 tracking-tight leading-none">
                <Reveal delay={0.1}>About</Reveal>
              </h1>
              <p className="text-sm text-zinc-600 mt-4 tracking-wider">
                educaiについて
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <Row label="Mission">
          <ScrollFade>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-950 leading-snug tracking-tight">
              AIの力で、学ぶ人と教える人の
              <br className="hidden sm:block" />
              可能性を広げる。
            </blockquote>
          </ScrollFade>
        </Row>

        {/* Company */}
        <Row label="Company">
          <ScrollFade>
            <div className="space-y-5 text-sm text-zinc-700 leading-relaxed max-w-xl">
              <p>
                educaiは、AI技術と教育領域の知見を掛け合わせ、企業や教育現場が抱える課題の解決に取り組むテクノロジーカンパニーです。
              </p>
              <p>
                受託開発では、お客様のビジネス課題に合わせたシステム開発・AI機能の導入を支援します。AI研修では、Claude
                CodeやCodexをはじめとした最新のAI開発ツールを実務で活用できるよう、ハンズオン形式でサポートします。
              </p>
              <p>
                さらに、教育向けの自社アプリ開発を通じて、学ぶ人・教える人それぞれにとってより良い体験を届けることを目指しています。
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="/services"
                className="text-xs tracking-widest uppercase font-medium text-zinc-950 border-b border-zinc-400 pb-0.5 hover:border-cyan-600 hover:text-cyan-600 transition-colors"
              >
                Services を見る →
              </Link>
            </div>
          </ScrollFade>
        </Row>

        {/* Product */}
        <Row label="Product">
          <ScrollFade>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-600 border border-cyan-300 px-3 py-1 mb-6">
              <Sparkles size={11} />
              開発中
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 leading-tight tracking-tight mb-6">
              教育とAIの融合を、
              <br />
              プロダクトで。
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed max-w-md mb-8">
              educaiは現在、教育現場の課題をAIで解決するアプリケーションを開発中です。学ぶ人・教える人それぞれに最適な体験を届けることを目指し、日々プロダクトの磨き込みを進めています。
            </p>
            <StaggerList>
              {[
                "個別最適な学習体験の提供",
                "教師・教育事業者の業務効率化",
                "AIを活用した学習サポート",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-4 text-sm text-zinc-600 py-2">
                    <span className="w-5 h-px bg-cyan-500 flex-shrink-0" />
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </ScrollFade>
        </Row>

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
