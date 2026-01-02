import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BoardProps {
  profilePic: StaticImageData;
  name: string;
  position: string;
  majorYear: string;
  linkedin: string;
}

const BoardCard = ({
  profilePic,
  name,
  position,
  majorYear,
  linkedin,
}: BoardProps) => {
  return (
    <div className="font-nunito relative flex flex-col items-center">
      <div className="relative aspect-square w-full">
        <Image
          src={profilePic}
          alt="profile Pic"
          fill
          className="rounded-3xl object-cover object-[center_80%]"
        />
      </div>
      <div className="h-20 w-65 -translate-x-8 -translate-y-30 content-center bg-white/80 pl-5">
        <p className="text-2xl font-bold"> {name} </p>
        <p className="text-l"> {position} </p>
      </div>
      <div className="-translate-y-20">
        <p className="py-4 text-xl">{majorYear}</p>
        <Link href={linkedin} target="_blank">
          <p className="text-l bg-ascend-dark-blue justify-self-center rounded-full px-6 py-1 text-white hover:underline hover:underline-offset-2">
            {"LinkedIn"}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BoardCard;
