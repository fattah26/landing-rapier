import React from "react";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="bg-cover bg-center h-[571px] md:h-[673px] flex items-center justify-center"
      style={{ backgroundImage: "url('/images/background-home.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center pt-[174px] tablet:pt-[230px] pb-[80px] gap-[80px] px-[30px] tablet:px-[28px] desktop:px-[376px]">
        <h1 className="font-mobile-title-main tablet:text-[48px] text-center ">
          We are
          <span className="text-alert"> Rapier </span>
          <span className="text-alert">Technology International</span>, Build
          professional and modern Apps is our passion.
        </h1>
        <Link href="/SeeMore">
          <button className="flex w-[125px] tablet:w-[170px] tablet:h-[51px] h-[33px] justify-center items-center font-mobile-text-main tablet:text-[16px] rounded-xl border border-alert-50 bg-alert-10 custom-shadow hover:bg-alert duration-75">
            Find Out More
          </button>
        </Link>
      </div>
    </section>
  );
}
