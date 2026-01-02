import { motion } from "motion/react";

export interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const EventCard = ({
  title,
  date,
  time,
  location,
  description,
}: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="-mx-12 flex h-80 w-xs flex-col px-8 md:w-lg"
    >
      <p className="font-playfair text-ascend-red-orange line-clamp-2 h-20 border-t-2 border-b-2 border-black py-2 text-center text-xl/8 font-bold md:py-4 md:text-3xl/12">
        {title}
      </p>
      <div className="flex-shrink-0 pt-6 text-left text-sm font-semibold md:text-xl">
        <p className="truncate">
          {date} | {time}
        </p>
        <p className="truncate">{location}</p>
      </div>
      <p className="line-clamp-3 flex-1 overflow-hidden py-4 text-left indent-4 text-xs font-thin md:indent-8 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
};

export default EventCard;
