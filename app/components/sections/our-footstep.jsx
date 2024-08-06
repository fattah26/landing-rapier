import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TOPPROJECT } from "../../constants";

export default function OurFootstep() {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center py-[50px] tablet:py-[80px] px-[30px] tablet:px-[50px] desktop:px-[130px] gap-[100px] tablet:gap-[80px]"
    >
      <div className="flex flex-col text-center gap-[30px] tablet:px-[50px] desktop:px-[130px]">
        <h1 className="font-mobile-title-main tablet:text-[48px]">
          Our <span className="text-alert">Footsteps</span>
        </h1>
        <p className="font-mobile-text-main tablet:text-[16px]">
          Our company&apos;s trail of success and innovation
        </p>
      </div>
      <div className="flex">
        <div className="grid items-center justify-center w-full h-full grid-cols-1 gap-[50px] desktop:grid-cols-3">
          {TOPPROJECT.map((project) => (
            <Link
              href={`/${project.alt}`}
              key={project.id}
              className="w-[260px] tablet:w-[360px] tablet:h-[377px] rounded-xl overflow-hidden hover:scale-105 duration-150"
            >
              <Image
                src={project.src}
                alt={project.alt}
                width={260}
                height={194}
                className="w-full tablet:h-[269px]"
              />
              <div className="flex flex-col bg-secondary py-[26px] gap-[10px] justify-center items-center break-words text-center">
                <h1 className="font-mobile-sub-title tablet:text-[22px]">
                  {project.title}
                </h1>
                <p className="font-mobile-text-main tablet:text-[16px]">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Link href="/SeeMore">
        <button className="flex flex-row justify-center items-center gap-1 tablet:gap-2 w-[124px] tablet:w-[148px] h-[32px] tablet:h-[43px] rounded-xl bg-alert-50 hover:bg-alert duration-75">
          <p className="font-mobile-text-main tablet:text-[16px]">See More</p>
          <Image
            src="/images/logo/angle-small-right.svg"
            alt="Arrow icon"
            width={20}
            height={20}
          />
        </button>
      </Link>
    </section>
  );
}
