"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function Landing() {
  const cardBase =
    "relative w-full max-w-lg h-[140px] px-8 py-5 md:px-10 md:py-6 text-center shadow-xl ring-1 ring-black/10 bg-white/40";

  return (
    <section
      aria-label="Ascend landing hero"
      className="relative isolate flex min-h-[60vh] w-full items-start justify-center overflow-hidden bg-neutral-900 md:min-h-[75vh] lg:min-h-[80vh]"
    >
      <Image
        src="/home/group-1.webp"
        alt="Ascend members at an event"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-10 md:pt-14 lg:pt-16"
      >
        <div
          className={`${cardBase} translate-x-[-10px] translate-y-[150px]`}
          aria-hidden="true"
        />

        <div className={cardBase}>
          <h1 className="text-ascend-red-orange font-playfair -mt-4 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            Ascend
          </h1>

          <p className="font-nunito py-2 text-xl font-semibold text-black/90 md:text-3xl">
            Connect. Inspire. Ascend.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
