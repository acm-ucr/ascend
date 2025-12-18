import SubHeading from "@/components/SubHeading";
import Link from "next/link";

const HowTo = () => {
  return (
    <div className="mb-20 flex flex-col items-center text-center">
      <SubHeading title="How to Join" />
      <p className="mt-12 mb-4 w-3/4 text-xl md:w-1/2 md:text-2xl">
        Click below to join Ascend and take the first step toward new
        opportunities, meaningful connections, and becoming part of an inspiring
        community today!
      </p>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSeqIkvwOGsgWqoSMf8iVcUtLzNR4aCrUyB8ebNY6xi5F1L8ZQ/viewform"
        target="_blank"
        className="bg-ascend-red-orange mt-5 rounded-full px-8 py-2 text-2xl text-white transition hover:bg-red-700"
      >
        Join!
      </Link>
    </div>
  );
};

export default HowTo;
