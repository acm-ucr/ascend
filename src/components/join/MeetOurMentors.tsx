"use client";

import { useState } from "react";
import MentorGrid from "./MentorGrid";
import mentors from "@/data/mentors";

const MeetOurMentors = () => {
  const [activeTab, setActiveTab] = useState("Consulting");

  return (
    <div className="m-auto w-76/100">
      <div className="font-playfair mb-12 flex justify-center text-3xl font-bold">
        Meet Our Mentors
      </div>
      <div className="flex">
        {(() => {
          const tabs: (keyof typeof mentors)[] = [
            "Consulting",
            "Finance",
            "Accounting",
            "Tech",
          ];
          return tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-playfair flex w-1/4 min-w-0 justify-center truncate rounded-t-3xl px-2 py-2 text-[15px] font-bold sm:px-6 sm:py-3 sm:text-xl md:text-2xl ${
                activeTab === tab
                  ? "bg-ascend-light-orange text-black"
                  : "text-ascend-red-orange bg-gray-200"
              } `}
            >
              {tab}
            </button>
          ));
        })()}
      </div>
      <div className="border-2 border-orange-300 px-14 py-12">
        <MentorGrid data={mentors[activeTab as keyof typeof mentors]} />
      </div>
    </div>
  );
};

export default MeetOurMentors;
