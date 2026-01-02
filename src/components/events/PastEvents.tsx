"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import ocleft from "@/public/events/oc/oc-left.webp";
import ocmiddle from "@/public/events/oc/oc-middle.webp";
import ocright from "@/public/events/oc/oc-right.webp";
import ssleft from "@/public/events/speaker-series/ss-left.webp";
import ssmiddle from "@/public/events/speaker-series/ss-middle.webp";
import ssright from "@/public/events/speaker-series/ss-right.webp";
import gwleft from "@/public/events/growth-week/gw-left.webp";
import gwmiddle from "@/public/events/growth-week/gw-middle.webp";
import gwright from "@/public/events/growth-week/gw-right.webp";
import Heading from "../Heading";

const LeftAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const MiddleAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.4 } },
};

const RightAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.8 } },
};

const tabs = [
  {
    id: 1,
    title: "Ascend OC Events",

    content: `At Ascend UCR, we’re proud to be part of something bigger than just ourselves — and we’re connected to the regional Ascend Orange County Chapter. Even though we're based in the Inland Empire, our student chapter makes a real effort to not just attend, but actively volunteer at Ascend OC events.

         From fun celebrations to philanthropic activities to career-building opportunities, these events give you the chance to grow, connect, and make an impact beyond UCR. Some of the amazing events we've been part of include Ascend OC Lunar New Year Celebration at the EY Irvine office, the Ascend OC Spring Connect & Celebration, and the Ascend OC End-Of-Year Gala — just to name a few!
        
         Being part of Ascend UCR means you're not just joining another campus club — you're stepping into a wider professional community ready to help you grow.`,
  },
  {
    id: 2,
    title: "Speaker Series",

    content: `At Ascend UCR, we believe the best way to grow is by learning directly from those who’ve been there. That's why every quarter, we bring in 4 or more industry profesionals that are not just from our own network, but also from the broader Ascend community too.
        
         We focus on leaders who are shaping the fields of Finance, Accounting, Technology, and Consulting, giving you real-world insights from early career moves to top leadership lessons. 
         
         Our Speaker Series isn't just about listening, it's about connecting. These events give you the chance to build real, lasting relationships face-to-face, and to take the next step in your professional journey with people who can help you get there.`,
  },
  {
    id: 3,
    title: "Growth Week",

    content: `At Ascend UCR, we believe starting your professional journey shouldn't be overwhelming — that's why we created Growth Week. Instead of spreading workshops across the year like most organizations, we condences everything you need to kickstart you career into one action-packed week.
        
         During Week 2 of both Fall and Winter quarters, we host three back-to-back events focused on helping you get ready: from prefecting you resume before you hit "submit," to mastering networking strategies that build real relationships, to sharpening your interview skills.
         Growth Week is all about giving you the tools, confidence, and momentum to grow into the professional and leader you aspire to be. It's designed to eliminate the barriars to getting started — inspiring you to take action now and make your future happen.`,
  },
];

const PastEvents = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <Heading title="Past Events" />
      <div className="outline-ascend-light-orange h-full w-full p-8 md:p-16">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`font-playfair flex-1 rounded-t-2xl p-2 font-bold md:rounded-t-4xl md:p-8 md:text-3xl ${
                activeTab === tab.id
                  ? "bg-ascend-light-orange z-20"
                  : "text-ascend-red-orange z-10 bg-gray-300 transition-all hover:-translate-y-0.5 hover:scale-[103%] hover:cursor-pointer"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="font-nunito border-ascend-light-orange border-2 p-6 text-center md:p-10 md:text-xl">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div key={tab.id} className="space-y-8">
                  {tab.content.split("\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph.trim()}</p>
                  ))}
                  {activeTab === 1 && (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <motion.div
                        variants={LeftAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative hidden h-64 w-full overflow-hidden rounded-lg md:block"
                      >
                        <Image
                          src={ocleft}
                          alt="ocleft"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <motion.div
                        variants={MiddleAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative hidden h-64 w-full overflow-hidden rounded-lg md:block"
                      >
                        <Image
                          src={ocmiddle}
                          alt="ocmiddle"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <motion.div
                        variants={RightAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative h-64 w-full overflow-hidden rounded-lg"
                      >
                        <Image
                          src={ocright}
                          alt="ocright"
                          fill
                          className="object-cover [object-position:center_20%]"
                        />
                      </motion.div>
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <motion.div
                        variants={LeftAnimation}
                        initial="hidden"
                        whileInView="visible"
                        className="relative h-64 w-full overflow-hidden rounded-lg"
                      >
                        <Image
                          src={ssleft}
                          alt="ssleft"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <motion.div
                        variants={MiddleAnimation}
                        initial="hidden"
                        whileInView="visible"
                        className="relative hidden h-64 w-full overflow-hidden rounded-lg md:block"
                      >
                        <Image
                          src={ssmiddle}
                          alt="ssmiddle"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <motion.div
                        variants={RightAnimation}
                        initial="hidden"
                        whileInView="visible"
                        className="relative hidden h-64 w-full overflow-hidden rounded-lg md:block"
                      >
                        <Image
                          src={ssright}
                          alt="ssright"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  )}
                  {activeTab === 3 && (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <motion.div
                        variants={LeftAnimation}
                        initial="hidden"
                        whileInView="visible"
                        className="relative h-64 w-full overflow-hidden rounded-lg"
                      >
                        <Image
                          src={gwleft}
                          alt="gwleft"
                          fill
                          className="object-cover [object-position:center_40%]"
                        />
                      </motion.div>
                      <motion.div
                        variants={MiddleAnimation}
                        initial="hidden"
                        whileInView="visible"
                        className="relative hidden h-64 w-full overflow-hidden rounded-lg md:block"
                      >
                        <Image
                          src={gwmiddle}
                          alt="gwmiddle"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <motion.div
                        variants={RightAnimation}
                        initial="hidden"
                        whileInView="visible"
                        className="relative hidden h-64 w-full overflow-hidden rounded-lg md:block"
                      >
                        <Image
                          src={gwright}
                          alt="gwright"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  )}
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};
export default PastEvents;
