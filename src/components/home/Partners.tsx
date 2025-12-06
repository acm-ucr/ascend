"use client";
import Carousel from "@/components/Carousel";
import partners from "@/data/partners";
import Heading from "../Heading";
import Image from "next/image";
import groupPhoto2 from "@/public/home/group2withdots.webp";
import { motion } from "motion/react";

const Partners = () => {
  return (
    <>
      {/* TODO: Change this to subheading after its done */}
      <Heading title="Partners" />
      <Carousel data={partners} />
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Image src={groupPhoto2} alt="Group Photo 2" className="w-1/2 pb-12" />
      </motion.div>
    </>
  );
};

export default Partners;
