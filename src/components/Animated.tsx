"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** ページロード時にフェードアップ */
export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** スクロールで入ったときにフェードアップ */
export function ScrollFade({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * クリップリビール: テキストが下から上へせり上がる
 * Swiss / エディトリアルデザイン向け
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden${className ? ` ${className}` : ""}`}>
      <motion.span
        className="block"
        initial={{ y: "106%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.85, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** スタガーリスト: 子要素を順番にアニメーション */
export function StaggerList({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** スタガーリストの各アイテム */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
