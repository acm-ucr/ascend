"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Cards from "./cards";

export type GoogleEventProps = {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  summary: string;
};

export interface EventCardProps {
  date: string;
  month: string;
  title: string;
  description: string;
}

const UpcomingEvents = () => {
  const { data, isLoading, isError } = useQuery<{
    allEvents: GoogleEventProps[];
    futureEvents: GoogleEventProps[];
  }>({
    queryKey: ["googleCalendarEvents"],
    queryFn: async () => {
      const now = new Date();
      const tenWeeksAgo = new Date(
        now.getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();
      const tenWeeksAhead = new Date(
        now.getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${tenWeeksAgo}&timeMax=${tenWeeksAhead}`,
      ).then((res) => res.json());

      const allEvents: GoogleEventProps[] = response.items || [];

      const futureEvents = allEvents
        .filter((item) => {
          const startString = item.start?.dateTime || item.start?.date;
          return startString && new Date(startString) >= now;
        })
        .slice(0, 3);

      return { allEvents, futureEvents };
    },
  });
  return (
    <div>
      <div className="flex flex-col items-center pb-8">
        <p className="text-winc-blue-500 mt-4 mb-4 text-center text-4xl leading-none font-extrabold">
          Upcoming Events
        </p>
        <div className="border-winc-red-400 w-16 border-2" />
      </div>

      {!isLoading && data && data.futureEvents.length === 0 && (
        <p className="mt-6 pb-8 text-center text-2xl text-black">
          No upcoming events.
        </p>
      )}
      {!isLoading && data && data.futureEvents.length > 0 && (
        <Cards
          events={data.futureEvents}
          isLoading={isLoading}
          isError={isError}
        />
      )}
    </div>
  );
};

export default UpcomingEvents;
