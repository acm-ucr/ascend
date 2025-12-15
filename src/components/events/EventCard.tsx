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
      <p className="font-playfair text-ascend-red-orange border-t-2 border-b-2 border-black py-2 text-center text-2xl font-bold md:py-4 md:text-3xl lg:text-4xl xl:text-5xl">
        {title}
      </p>
      <div className="text-md py-3 text-left font-semibold md:text-xl lg:text-2xl xl:text-3xl">
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
