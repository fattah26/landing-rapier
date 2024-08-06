// our-journey.jsx
"use client";

import React from "react";
import Journey from "../card/journey";

export default function OurJourney() {
  return (
    <section id="journey" className="h-[100vh]">
      <div className="px-[1.875rem] py-[3.125rem] tablet:px-[3.125rem] tablet:py-[5rem] desktop:px-[8.125rem] desktop:py-[5rem]">
        <div className="text-center">
          <h1
            id="title"
            className="font-mobile-title-main w-full tablet:font-desktop-title-main"
          >
            Check Out Our Progress On This
            <span className="text-alert"> Journey</span>
          </h1>
          <p
            id="description"
            className="font-mobile-text-main mt-[1.875rem] tablet:font-desktop-text-main"
          >
            From our first steps to today, we have been committed to continuous
            growth and development, and we want you to be a true witness to our
            transformation and achievements along this journey
          </p>
        </div>

        <div id="slider" className="mt-[3.125rem] desktop:mt-20">
          <Journey />
        </div>
      </div>
    </section>
  );
}
