import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Reveal, FadeUp } from "@/components/Animated";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "educaiへのお問い合わせ。受託開発のご依頼、AI研修のご相談など、お気軽にご連絡ください。",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page header */}
        <div className="border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="py-14 md:py-20">
              <h1 className="text-6xl md:text-8xl font-extrabold text-zinc-950 tracking-tight leading-none">
                <Reveal delay={0.1}>Contact</Reveal>
              </h1>
              <p className="text-sm text-zinc-600 mt-4 tracking-wider">
                お問い合わせ
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
            <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20 items-start">
              {/* Left */}
              <FadeUp delay={0.2}>
                <p className="text-sm text-zinc-700 leading-relaxed mb-10">
                  受託開発のご依頼、AI研修のご相談、プロダクトへのご興味など、まずはお気軽にご連絡ください。
                </p>
                <dl className="space-y-5">
                  <div>
                    <dt className="text-xs text-zinc-400 tracking-widest uppercase mb-1.5">
                      Email
                    </dt>
                    <dd>
                      <a
                        href="mailto:contact@educai.jp"
                        className="text-sm text-cyan-600 hover:text-cyan-700 transition-colors border-b border-cyan-200 pb-0.5"
                      >
                        contact@educai.jp
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-zinc-400 tracking-widest uppercase mb-1.5">
                      Location
                    </dt>
                    <dd className="text-sm text-zinc-700">Tokyo, Japan</dd>
                  </div>
                </dl>
              </FadeUp>

              {/* Right: form */}
              <FadeUp delay={0.35}>
                <ContactForm />
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
