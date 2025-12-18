"use client";
import Card from "@/components/calendar/upcomingevents/card";
import { motion } from "motion/react";
import type { DayPicker } from "react-day-picker";
import type { GoogleEventProps } from "@/components/calendar/upcomingevents/upcomingevents";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: GoogleEventProps[];
};

type EventProps = CalendarProps & {
  isError: boolean;
  isLoading: boolean;
};

const eventsVariant = {
  variants: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  },
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true },
};

const Cards = ({ events, isLoading, isError }: EventProps) => {
  if (isLoading)
    return (
      <p className="my-10 flex items-center justify-center text-3xl font-light text-white">
        Loading events...
      </p>
    );

  if (isError)
    return (
      <p className="my-10 flex items-center justify-center text-3xl font-light text-white">
        Error fetching events
      </p>
    );

  if (events.length === 0)
    return (
      <p className="my-10 flex items-center justify-center text-3xl font-light text-white">
        No Upcoming Events
      </p>
    );

  return (
    <motion.div
      className="mx-auto mb-10 grid w-11/12 gap-y-6 text-3xl md:w-7/12"
      {...eventsVariant}
    >
      {events.map((event, index) => {
        const dateObj = new Date(
          event.start.dateTime || event.start.date || "",
        );

        const month = dateObj.toLocaleString("en-US", { month: "short" });
        const day = dateObj.toLocaleString("en-US", { day: "numeric" });

        const formattedTime = dateObj.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        });

        return (
          <motion.div key={index} {...eventsVariant}>
            <Card
              title={event.summary}
              month={month}
              day={day}
              location={event.location || "No location"}
              startingTime={formattedTime}
              description={event.description || ""}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Cards;
