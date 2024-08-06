"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  const handleClick = () => {
    const whatsappUrl = "https://wa.me/6281213163900?text=Hello%2C%20I%20am%20interested%20in%20your%20services%21";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="border-solid mb-[50px] flex flex-col py-[50px] px-[30px] tablet:mb-20 tablet:py-[80px] tablet:px-[50px] desktop:py-[80px] desktop:px-[130px]">
      <div className="text-center">
        <h1 className="font-mobile-title-main tablet:font-desktop-title-main">
          <span className="text-alert">Contact Us </span>
          For Further Information
        </h1>

        <p className="mt-[26px] font-mobile-text-main tablet:font-desktop-text-main tablet:mt-[30px]">
          Ask, discuss and find solutions with our team. We are ready to listen and help you meet your needs
        </p>
      </div>

      <div className="justify-center text-center mt-[50px] tablet:mt-[80px]">
        <h2 className="font-mobile-sub-title tablet:font-desktop-sub-title">Business Director</h2>
        <p className="flex flex-col font-mobile-text-main text-inactive mt-4 tablet:font-desktop-text-main">
          <Link href="mailto:calvin.valentino@rapiertechnologi.co.id" target="_blank">calvin.valentino@rapiertechnology.co.id</Link>
          <Link href="tel:+6281213163900" target="_blank">+62 812-1316-3900</Link>
        </p>

        <button
          onClick={handleClick}
          className="flex items-center justify-center mx-auto mt-[26px] bg-white text-primary py-1.5 px-[18px] rounded-xl font-mobile-text-main tablet:mt-[50px] tablet:font-desktop-text-main tablet:px-6 tablet:py-3">
          <Image src="/images/social-media/whatsapp.svg" alt="WhatsApp Logo" width={16} height={16} className="mr-2 tablet:h-4 tablet:w-4" />
          Contact Us
        </button>
      </div>
    </section>
  );
}
