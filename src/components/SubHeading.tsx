interface SubHeadingProps {
  title: string;
}

const SubHeading = ({ title }: SubHeadingProps) => {
  return (
    <div className="mx-auto w-3/4 text-center">
      <div className="border-t border-black" />
      <p className="text-ascend-red-orange font-playfair my-8 text-3xl font-bold md:text-4xl">
        {title}
      </p>
      <div className="border-t border-black" />
    </div>
  );
};

export default SubHeading;
