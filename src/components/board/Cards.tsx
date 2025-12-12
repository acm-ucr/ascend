import { Board } from "@/data/board";
import BoardCard from "@/components/board/BoardCard";

const Cards = () => {
  return (
    <div>
      {Board.map(({ title, members }, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-10 px-4 sm:gap-16"
        >
          <p className="font-playfair text-ascend-red-orange mt-10 text-2xl font-bold underline underline-offset-4 sm:text-3xl md:text-4xl">
            {title}
          </p>

          <div className="grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-25">
            {members.map(
              ({ profilePic, name, position, majorYear, linkedin }, index) => (
                <div key={index} className="font-nunito">
                  <BoardCard
                    profilePic={profilePic}
                    name={name}
                    position={position}
                    majorYear={majorYear}
                    linkedin={linkedin}
                  />
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
