import Gallery from "@/components/events/Gallery";
import SubHeading from "@/components/SubHeading";
import PastEvents from "@/components/events/PastEvents";

const Events = () => {
  return (
    <>
      <PastEvents />
      <SubHeading title="Gallery" />
      <Gallery />
    </>
  );
};

export default Events;
