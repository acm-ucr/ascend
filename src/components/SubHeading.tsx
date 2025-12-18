interface SubHeadingProps {
  title: string;
}

const SubHeading = ({ title }: SubHeadingProps) => {
  return (
    <div className="mx-auto w-3/4 text-center">
      <div className="border-t border-black" />
      <p className="text-ascend-red-orange font-playfair mt-12 mb-8 text-4xl font-bold md:text-5xl">
        {title}
      </p>
      <div className="border-t border-black" />
    </div>
  );
};

export default SubHeading;
