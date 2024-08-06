import Image from "next/image";
import closeIcon from "../../public/images/logo/cross.svg";
import rapierLogo from "@/public/images/rapier.png";
import { NAV_ITEMS } from "../constants";
import Link from "next/link";

export default function PopUp({ onClose }) {
  return (
    <div className="z-50 fixed right-0 top-0 p-5 bg-secondary font-mobile-navigation rounded-b-xl w-full h-dvh">
      <div className="flex justify-between">
        <button onClick={onClose} className="sticky pb-5 size-14">
          <Image src={rapierLogo} alt="Cross Image to Close PopUp" />
        </button>
        <button onClick={onClose} className="sticky pb-5">
          <Image src={closeIcon} alt="Cross Image to Close PopUp" />
        </button>
      </div>
      <ul className="flex flex-col space-y-5 tablet:space-y-[1.875rem]">
        {NAV_ITEMS.map((navItems) => (
          <li className="hover:underline" key={navItems.id}>
            <Link onClick={onClose} href={navItems.href}>
              {navItems.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
