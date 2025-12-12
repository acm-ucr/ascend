"use client";
import Link from "next/link";
import { motion } from "motion/react";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="font-playfair text-ascend-red-orange text-8xl lg:text-9xl">
          404
        </h1>
        <p className="font-playfair mt-2 text-4xl font-bold lg:mt-5 lg:text-6xl">
          Page Not Found
        </p>
        <Link
          href="/"
          className="bg-ascend-red-orange mt-4 rounded-full px-6 py-2 text-xl text-white transition hover:bg-red-700 lg:mt-8 lg:px-12 lg:py-4 lg:text-4xl"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
