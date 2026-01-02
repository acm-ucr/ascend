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
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 md:p-8">
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
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform hover:scale-105"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;
