import React from "react";
import Customers from "../card/customers";
import Partners from "../card/partners";

export default function OurClient() {
  return (
    <section id="customer" className="flex flex-col my-[50px] tablet:my-[80px] gap-[50px] tablet:gap-[80px] px-[30px] tablet:px-[50px] desktop:px-[130px]">
      <div className="flex flex-col text-center gap-[30px] px-[30px] tablet:px-[50px] desktop:px-[130px]">
        <h1 className="font-mobile-title-main tablet:text-[48px]">
          Our <span className="text-alert">Clients</span>, Our Inspiration
        </h1>
        <p className="font-mobile-text-main tablet:text-[16px]">Our clients are our main source of inspiration, guiding our every step towards success.</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-[30px] tablet:gap-[50px]">
        <p className="font-mobile-sub-title tablet:text-[22px]">Customers</p>
        <div className="flex w-full gap-[30px] overflow-hidden fade-scroll">
          <Customers />
          <Customers />
        </div>
        <p className="font-mobile-sub-title tablet:text-[22px]">Partner</p>
        <div className="flex w-full gap-[30px] overflow-hidden fade-scroll">
          <Partners />
          <Partners />
          <Partners />
        </div>
      </div>
    </section>
  );
}
