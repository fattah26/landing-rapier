"use client";

import Image from "next/image";
import logo from "../../public/images/rapier.png";
import menuBurger from "../../public/images/logo/menu-burger.svg";
import { NAV_ITEMS, PopUp } from "../constants";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setVisible(scroll > currentScroll || currentScroll < 10);
      setScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClose = () => {
    setIsClicked(false);
  };

  return (
    <nav
      className={`fixed right-0 top-0 z-40 transition-transform duration-300  flex justify-between w-full px-[1.875rem] tablet:px-[3.125rem] desktop:px-[8.125rem] py-5 bg-primary-10 backdrop-blur-sm ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/#home">
        <Image
          src={logo}
          alt="Logo Rapier"
          className="w-[3.4744rem] h-[34] tablet:w-[4.0881rem] tablet:h-10"
        />
      </Link>
      <ul className="hidden gap-12 desktop:flex font-desktop-navigation">
        {NAV_ITEMS.map((navItems) => (
          <li className="hover:underline" key={navItems.id}>
            <Link href={navItems.href}>{navItems.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleClick} className="desktop:hidden">
        <Image src={menuBurger} alt="Menu Burger when you in mobile screen" />
      </button>
      {isClicked && <PopUp onClose={handleClose} />}
    </nav>
  );
}
