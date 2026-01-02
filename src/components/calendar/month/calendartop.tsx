import { LuArrowRight, LuArrowLeft } from "react-icons/lu";

interface CalendarTopProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarTop = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
}: CalendarTopProps) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="font-nunito mx-auto flex w-10/12 flex-col md:flex-row">
      <div className="items-enter flex w-full pb-6 md:pb-0">
        <p className="text-ascend-dark-blue font-playfair w-full text-center text-4xl font-bold md:text-left">
          Calendar
        </p>
      </div>
      <div className="ml-auto flex w-full items-center justify-between pb-6 text-gray-700 md:justify-end md:space-x-4 md:pb-0">
        <button
          onClick={onPrevMonth}
          className="text-4xl transition hover:-translate-x-1"
        >
          <LuArrowLeft className="text-ascend-red-orange" />
        </button>
        <span className="w-fit px-4 text-2xl md:px-0 md:text-3xl">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>
        <button
          onClick={onNextMonth}
          className="text-4xl transition hover:translate-x-1"
        >
          <LuArrowRight className="text-ascend-red-orange" />
        </button>
      </div>
    </div>
  );
};

export default CalendarTop;
