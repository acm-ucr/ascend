"use client";
import { motion } from "motion/react";
import Heading from "@/components/Heading";
import Image from "next/image";
import Ascend from "@/public/home/ascend.webp";

const ImageAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const JoinUs = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading title="Join Us" />
      <p className="text-ascend-dark-blue mt-15 w-2/3 text-center text-2xl">
        Ascend is a national non-profit organization that is advancing Pan-Asian
        professionals across all industries. We welcome students of every major
        who are passionate about leadership, growth, and community.
      </p>

      <motion.div
        variants={ImageAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative my-15 h-96 w-full"
      >
        <Image src={Ascend} alt="Logo" fill className="object-cover" priority />
      </motion.div>
    </div>
  );
};

export default JoinUs;
