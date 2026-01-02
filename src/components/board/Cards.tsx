import { Board } from "@/data/board";
import BoardCard from "@/components/board/BoardCard";

const Cards = () => {
  return (
    <div>
      {Board.map(({ title, members }, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-10 px-4"
        >
          <p className="font-playfair text-ascend-red-orange my-10 text-2xl font-bold underline underline-offset-4 sm:text-3xl md:text-4xl">
            {title}
          </p>

          <div className="grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-10">
            {members.map(
              ({ profilePic, name, position, majorYear, linkedin }, idx) => (
                <div
                  key={idx}
                  className={`font-nunito ${
                    members.length % 2 === 1 && idx === members.length - 1
                      ? "md:col-span-2"
                      : ""
                  }`}
                >
                  <div className="w-full md:mx-auto md:max-w-md">
                    <BoardCard
                      profilePic={profilePic}
                      name={name}
                      position={position}
                      majorYear={majorYear}
                      linkedin={linkedin}
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
