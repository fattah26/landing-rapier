"use client";

import React, { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function AboutUs() {
  const [counterState, setCounterState] = useState(false);

  return (
    <section id="about-us" className="bg-gradient-to-b from-[#000000] to-[#07011A]">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-[30px] py-[50px] tablet:py-20 tablet:px-[90px] desktop:py-20 desktop:px-[130px]">
          <div className="flex flex-col desktop:flex-row desktop:items-start">
            {/* image */}
            <div id="image" className="w-full desktop:w-1/2 self-start">
              <Image src="/images/foto-kantor-rapier.png" alt="Rapier office" width={1920} height={1080} className="w-full h-auto" layout="responsive" />
            </div>

            {/* information */}
            <div id="information" className="h-full w-full pt-[30px] desktop:w-1/2 desktop:pt-0 desktop:pl-[50px] self-start">
              <div>
                <h1 id="title" className="font-mobile-title-main mt-0 tablet:font-desktop-title-main">
                  <span className="text-alert">About</span> Rapier
                </h1>
                <p id="text" className="font-mobile-text-main max-w-xl tablet:mt-30px tablet:font-desktop-text-main">
                  Rapier is a team consisting of people with talent, passion and creativity. Each of them brings special specialization, ranging from programming, design, creating IT (Information Technology) systems, to business analysis.
                  What the Rapier team offers is more than just creating IT programs. Rapier combines IT technology with business analysis to create business solutions that are more effective and more efficient in terms of operational
                  costs.
                </p>
              </div>

              <div className="inline-block mt-[30px]">
                <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                  <div id="clients" className="inline-block">
                    <h2 className="font-mobile-title-main m-0 tablet:font-desktop-title-main">{counterState && <CountUp start={0} end={1000} duration={2} />} +</h2>
                    <h4 className="font-mobile-text-main mt-5 m-0 tablet:font-desktop-text-main">Clients</h4>
                  </div>

                  <div id="patners" className="inline-block ml-[30px]">
                    <h2 className="font-mobile-title-main m-0 tablet:font-desktop-title-main">{counterState && <CountUp start={0} end={1000} duration={2} />} +</h2>
                    <h4 className="font-mobile-text-main mt-5 m-0 lg:font-desktop-text-main">Patners</h4>
                  </div>
                </ScrollTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
