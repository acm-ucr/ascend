"use client";
import { useState, useEffect } from "react";
import EventCard, { type EventCardProps } from "./EventCard";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        description: event.description || " ",
      };
    });
  };

  const formattedEvents = eventFormat(calendarEvents);
  const displayEvents = formattedEvents.length > 0 ? formattedEvents : events;
  const cardsPerPage = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, displayEvents.length - cardsPerPage);
  const currentDisplay = displayEvents.slice(
    currIndex,
    currIndex + cardsPerPage,
  );

  if (displayEvents.length === 0) {
    return (
      <div className="text-center text-xl">There are no upcoming events.</div>
    );
  }

  const clickBack = () => {
    setCurrIndex((prev) => Math.max(0, prev - cardsPerPage));
  };

  const clickNext = () => {
    setCurrIndex((prev) => Math.min(maxIndex, prev + cardsPerPage));
  };

  return (
    <div className="mb-16 flex w-full flex-col md:flex-row md:items-center md:justify-center md:gap-20">
      <button
        onClick={clickBack}
        disabled={currIndex === 0}
        className="hidden text-4xl hover:-translate-x-1 active:scale-95 disabled:opacity-40 disabled:hover:-translate-x-0 disabled:active:scale-100 md:ml-20 md:block"
      >
        <LuArrowLeft />
      </button>

      <div className="mx-auto flex w-full flex-row items-center justify-center gap-16">
        {currentDisplay.map((event, index) => (
          <EventCard
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
            description={event.description}
            key={currIndex + index}
          />
        ))}
      </div>

      <button
        onClick={clickNext}
        disabled={currIndex >= maxIndex}
        className="hidden text-4xl hover:translate-x-1 active:scale-95 disabled:opacity-40 disabled:hover:translate-x-0 disabled:active:scale-100 md:mr-20 md:block"
      >
        <LuArrowRight />
      </button>

      <div className="mt-2 flex w-full items-center justify-center gap-8 md:hidden">
        <button
          onClick={clickBack}
          disabled={currIndex === 0}
          className="text-4xl hover:-translate-x-1 active:scale-95 disabled:opacity-40 disabled:hover:-translate-x-0 disabled:active:scale-100"
        >
          <LuArrowLeft />
        </button>
        <button
          onClick={clickNext}
          disabled={currIndex >= maxIndex}
          className="text-4xl hover:translate-x-1 active:scale-95 disabled:opacity-40 disabled:hover:translate-x-0 disabled:active:scale-100"
        >
          <LuArrowRight />
        </button>
      </div>
    </div>
  );
};

export default EventCarousel;
