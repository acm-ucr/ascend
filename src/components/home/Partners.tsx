"use client";
import Carousel from "@/components/Carousel";
import partners from "@/data/partners";
import Image from "next/image";
import groupPhoto2 from "@/public/home/group2withdots.webp";
import { motion } from "motion/react";
import SubHeading from "../SubHeading";

const Partners = () => {
  return (
    <div className="my-12 w-full">
      <SubHeading title="Partners" />
      <Carousel data={partners} />
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Image
          src={groupPhoto2}
          alt="Group Photo 2"
          className="w-4/5 pb-12 md:w-1/2"
        />
      </motion.div>
    </div>
  );
};

export default Partners;
