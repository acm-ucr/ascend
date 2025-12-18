"use client";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { motion } from "motion/react";

interface CarouselDataItem {
  icon: StaticImageData;
}

interface CarouselProps {
  data: CarouselDataItem[];
}

const Carousel = ({ data }: CarouselProps) => {
  const scrollingItems = [...data, ...data];

  return (
    <div className="relative my-16 h-40 w-full overflow-hidden md:my-10">
      <motion.div
        className="flex w-max items-center gap-6"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: [0, 0, 1, 1],
          duration: 20,
        }}
        style={{ willChange: "transform" }}
      >
        {scrollingItems.map((item, index) => (
          <div
            key={index}
            className="inline-flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-lg px-5 py-3"
          >
            <Image
              src={item.icon}
              alt={`item-${index}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
