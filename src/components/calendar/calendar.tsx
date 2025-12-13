"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { GoogleEventProps } from "../calendar/calendarcall";
import CalendarDay from "@/components/calendar/month/calendarday";
import CalendarTop from "@/components/calendar/month/calendartop";
import UpcomingEvents from "@/components/calendar/upcomingevents/upcomingevents";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: GoogleEventProps[];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  events,
  ...props
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  return (
    <div className="flex flex-col">
      <CalendarTop
        currentDate={currentDate}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
      />
      <DayPicker
        month={currentDate}
        showOutsideDays={showOutsideDays}
        formatters={{
          formatWeekdayName: (date) => {
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            return days[date.getDay()];
          },
          formatCaption: () => "",
        }}
        className={`${className} pb-8`}
        classNames={{
          months: "",
          month: "",
          month_caption: "",
          caption_label: "",
          nav: "space-x-8",
          button: "",
          button_previous: "hidden",
          button_next: "hidden",
          month_grid: "w-full space-y-1",
          weekdays:
            "grid grid-cols-7 bg-ascend-red-orange mt-[2vw] w-full text-center items-center justify-center h-[3vh] md:h-[5vh]",
          weekday: "text-white font-playfair text-sm sm:text-lg md:text-2xl ",
          week: "grid grid-cols-7",
          day: "h-[15vh] border border-ascend-red-orange bg-white md:text-3xl py-1 md:py-2",
          day_button: "w-full h-full",
          range_end: "",
          selected: "",
          outside: "",
          disabled: "",
          range_middle: "",
          hidden: "",
          ...classNames,
        }}
        components={{
          Day: ({ day }) => (
            <CalendarDay
              date={day.date}
              displayMonth={day.displayMonth}
              events={events}
            />
          ),
        }}
        {...props}
      />
      <UpcomingEvents />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
