const dot = "w-3 h-3 md:w-5 md:h-5 bg-ascend-light-orange rounded-full";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mb-4 flex flex-col gap-2 md:mb-8 md:gap-4 lg:mb-12 xl:mb-16">
        <div className="flex gap-2 md:gap-4">
          <span className={dot} />
          <span className={dot} />
          <span className={dot} />
        </div>
        <span className={dot} />
        <span className={dot} />
      </div>

      <p className="font-playfair text-ascend-dark-blue mx-10 text-3xl font-bold text-nowrap md:text-5xl lg:text-6xl">
        {title}
      </p>

      <div className="mt-4 flex flex-col items-end gap-2 md:mt-8 md:gap-4 lg:mt-12 xl:mt-16">
        <span className={dot} />
        <span className={dot} />
        <div className="flex gap-2 md:gap-4">
          <span className={dot} />
          <span className={dot} />
          <span className={dot} />
        </div>
      </div>
    </div>
  );
};

export default Heading;
