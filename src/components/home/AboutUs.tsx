import Image from "next/image";
import connect from "@/public/home/connect.webp";
import inspire from "@/public/home/inspire.webp";
import ascend from "@/public/home/ascend.webp";
import Heading from "../Heading";

const AboutUs = () => {
  return (
    <div className="font-nunito m-8 mx-auto mt-16 flex w-4/5 flex-col gap-8 text-lg md:text-2xl">
      <Heading title="About Us" />
      <div className="mx-8 my-4 flex flex-col gap-8 text-center md:my-12 md:text-left md:indent-12">
        <p>
          Ascend UCR is a one of the student-led chapters of Ascend Leadership,
          the largest non-profit membership organizations advancing Pan-Asian
          professionals in the workplace. Our objective is to empower Asian and
          Pacific Islander (API) business leaders of tomorrow to build community
          and ignite change.
        </p>
        <p>
          Through our UCR student chapter we host weekly events such as
          professional workshops, guest speakers, social events, and more to
          promote personal/professional development and create lifelong
          friendships.
        </p>
      </div>

      <div className="col-span-3 flex flex-row justify-center gap-32 text-4xl max-lg:flex-col max-lg:items-center max-lg:gap-6 max-lg:text-2xl">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={connect}
            alt="Connect"
            className="h-64 w-64 object-cover"
          />
          <p className="text-ascend-dark-blue">Connect</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image
            src={inspire}
            alt="Inspire"
            className="h-64 w-64 object-cover"
          />
          <p className="text-ascend-dark-blue">Inspire</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={ascend} alt="Ascend" className="h-64 w-64 object-cover" />
          <p className="text-ascend-dark-blue">Ascend</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
