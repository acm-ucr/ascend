"use client";
import { motion } from "motion/react";
import Image from "next/image";
import photos from "@/data/photos";

const PhotoAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Gallery = () => {
  return (
    <div className="lg::p-30 mx-5 grid grid-cols-3 gap-6 p-10 sm:p-15 md:mx-10 md:p-25 lg:mx-15">
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          variants={PhotoAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative aspect-[4/3] w-full overflow-hidden"
        >
          <Image
            src={photo.image}
            alt={photo.alt}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;
