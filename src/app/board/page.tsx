import Cards from "@/components/board/Cards";
import Heading from "@/components/Heading";
const Board = () => {
  return (
    <div className="my-8 mt-20">
      <Heading title="Meet the Board" />
      <Cards />
    </div>
  );
};

export default Board;
