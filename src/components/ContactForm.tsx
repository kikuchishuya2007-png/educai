"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

type Fields = { name: string; company: string; email: string; message: string };
const initial: Fields = { name: "", company: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<Fields>(initial);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `【お問い合わせ】${form.company ? form.company + " " : ""}${form.name}`
    );
    const body = encodeURIComponent(
      [
        `お名前: ${form.name}`,
        `会社名: ${form.company || "（未入力）"}`,
        `メールアドレス: ${form.email}`,
        "",
        "お問い合わせ内容:",
        form.message,
      ].join("\n")
    );
    window.location.href = `mailto:contact@educai.jp?subject=${subject}&body=${body}`;
  };

  const fieldBase =
    "w-full px-0 py-3 text-sm border-0 border-b border-zinc-200 bg-transparent text-zinc-950 placeholder-zinc-300 focus:outline-none focus:border-zinc-900 transition-colors";

  return (
    <form onSubmit={onSubmit} className="space-y-10" noValidate>
      <div className="grid sm:grid-cols-2 gap-10">
        <div>
          <label className="block text-xs tracking-widest uppercase text-zinc-600 mb-3">
            お名前 <span className="text-cyan-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="山田 太郎"
            value={form.name}
            onChange={onChange}
            className={fieldBase}
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-zinc-600 mb-3">
            会社名
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="株式会社〇〇"
            value={form.company}
            onChange={onChange}
            className={fieldBase}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-widest uppercase text-zinc-600 mb-3">
          メールアドレス <span className="text-cyan-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="taro@example.com"
          value={form.email}
          onChange={onChange}
          className={fieldBase}
        />
      </div>

      <div>
        <label className="block text-xs tracking-widest uppercase text-zinc-600 mb-3">
          お問い合わせ内容 <span className="text-cyan-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="ご相談内容をご記入ください。"
          value={form.message}
          onChange={onChange}
          className={`${fieldBase} resize-none`}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <button
          type="submit"
          className="text-sm font-medium border border-zinc-950 px-6 py-3 hover:bg-zinc-950 hover:text-white transition-colors"
        >
          送信する →
        </button>
        <span className="text-xs text-zinc-500">送信するとメールアプリが開きます</span>
      </div>
    </form>
  );
}
