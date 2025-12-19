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
    <div className="flex w-full flex-col">
      <p className="font-playfair text-ascend-red-orange border-t-2 border-b-2 border-black py-2 text-center text-lg font-bold sm:text-xl md:py-4 md:text-2xl lg:text-3xl xl:text-4xl">
        {title}
      </p>
      <div className="py-3 text-left text-xs font-semibold sm:text-lg md:text-xl lg:text-xl xl:text-xl">
        <p>
          {date} | {time}
        </p>
        <p>{location}</p>
      </div>
      <p className="text-left indent-4 text-sm font-thin md:indent-8 lg:text-lg xl:text-xl">
        {description}
      </p>
    </div>
  );
};

export default EventCard;
