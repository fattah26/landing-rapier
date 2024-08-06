// journey.jsx
"use client";

import { useEffect, useRef } from "react";
import { JOURNEY } from "@/app/constants";
import CircleArrow from "../sections/line/circle-arrow";

export default function Journey() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let scrollWidth = scrollContainer.scrollWidth;
    let scrollClientWidth = scrollContainer.clientWidth;

    const scrollInterval = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollWidth - scrollClientWidth) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-scroll scrollbar-hidden snap-x"
    >
      <div className="flex items-start">
        {[...JOURNEY, ...JOURNEY].map((journey, index) => (
          <div key={index} className="flex flex-shrink-0 mt-0">
            <div className="flex items-start mt-3 -mr-1">
              <CircleArrow />
            </div>
            <div className="h-full p-5 bg-secondary rounded-xl desktop:p-6">
              <h1
                id="year"
                className="w-full text-center font-mobile-sub-title"
              >
                {journey.year}
              </h1>
              <ul
                id="teks"
                className="px-5 font-mobile-text-main mt-2.5 list-disc desktop:font-desktop-sub-title"
              >
                {journey.text.map((item, idx) => (
                  <li
                    key={idx}
                    className="font-mobile-text-main desktop:font-desktop-text-main"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
