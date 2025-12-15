"use client";
import { useState } from "react";
import EventCard, { type EventCardProps } from "../events/EventCard";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import type { GoogleEventProps } from "./calendarcall";

interface EventCarouselProps {
  events?: EventCardProps[];
  calendarEvents?: GoogleEventProps[];
}

const EventCarousel = ({
  events = [],
  calendarEvents = [],
}: EventCarouselProps) => {
  const [currIndex, setCurrIndex] = useState(0);

  const eventFormat = (googleEvents: GoogleEventProps[]): EventCardProps[] => {
    return googleEvents.map((event) => {
      const eventDate = new Date(
        event.start?.dateTime || event.start?.date || "",
      );

      const month = eventDate.toLocaleString("en-US", { month: "long" });
      const day = eventDate.toLocaleString("en-US", { day: "numeric" });
      const year = eventDate.toLocaleString("en-US", { year: "numeric" });
      const formattedDate = `${month} ${day} ${year}`;
      const formattedTime = eventDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      });

      return {
        title: event.summary || "Event Title",
        date: formattedDate || "Month Day Year",
        time: formattedTime || "Time",
        location: event.location || "Location",
        description:
          event.description ||
          "     Description description description description description description description description description description description description",
      };
    });
  };

  // Testing without the api
  const testing: EventCardProps[] = [
    {
      title: "Event Title",
      date: "Month Day Year",
      time: "Time",
      location: "Location",
      description:
        "Description description description description description description description description description description description description",
    },
    {
      title: "Event Title",
      date: "Month Day Year",
      time: "Time",
      location: "Location",
      description:
        "Description description description description description description description description description description description description",
    },
    {
      title: "Event Title",
      date: "Month Day Year",
      time: "Time",
      location: "Location",
      description:
        "Description description description description description description description description description description description description",
    },
    {
      title: "Event Title",
      date: "Month Day Year",
      time: "Time",
      location: "Location",
      description:
        "Description description description description description description description description description description description description",
    },
    {
      title: "Event Title",
      date: "Month Day Year",
      time: "Time",
      location: "Location",
      description:
        "Description description description description description description description description description description description description",
    },
  ];

  const formattedEvents = eventFormat(calendarEvents);
  const displayEvents = formattedEvents.length > 0 ? events : testing; // using the testing list of events but it will be replaced with []
  const maxIndex = Math.max(0, displayEvents.length - 2);
  const currentDisplay = displayEvents.slice(currIndex, currIndex + 2);

  if (displayEvents.length === 0) {
    return (
      <div className="text-center text-xl">There are no upcoming events.</div>
    );
  }

  const goBack = () => {
    setCurrIndex((prev) => Math.max(0, prev - 2));
  };

  const clickNext = () => {
    setCurrIndex((prev) => Math.min(maxIndex, prev + 2));
  };

  return (
    <div className="relative mb-16 flex items-center justify-center">
      {currIndex > 0 && (
        <button
          onClick={goBack}
          className="absolute -bottom-10 left-35 z-10 text-4xl hover:-translate-x-1 active:scale-95 sm:bottom-auto sm:left-5 md:left-[5vw]"
        >
          <LuArrowLeft />
        </button>
      )}

      <div className="flex flex-row items-center justify-center gap-16">
        {currentDisplay.map((event, index) => (
          <div key={currIndex + index} className="w-1/3">
            <EventCard
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
            />
          </div>
        ))}
      </div>

      {currIndex < maxIndex && (
        <button
          onClick={clickNext}
          className="absolute right-35 -bottom-10 z-10 text-4xl hover:translate-x-1 active:scale-95 sm:right-5 sm:bottom-auto md:right-[5vw]"
        >
          <LuArrowRight />
        </button>
      )}
    </div>
  );
};

export default EventCarousel;
