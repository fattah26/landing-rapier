import Image from "next/image";
import rapierLogo from "../../public/images/rapier.png";
import { SOCIAL_MEDIA } from "../constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-[1.875rem] py-[3.125rem] bg-secondary font-mobile-navigation tablet:font-desktop-navigation tablet:px-20 tablet:py-[3.125rem] desktop:flex desktop:px-[8.125rem]">
      <div>
        <Image
          src={rapierLogo}
          alt="Logo Rapier"
          className="mb-5 tablet:w-[5.11rem] tablet:h-[3.125rem]"
        />
        <h5>PT Rapier Technology International</h5>
        <h5 className="mt-5 mb-2">Rapier Tangerang</h5>
        <p className="text-inactive">
          Jl. Iskandar Muda No.8, Neglasari, Kec. Neglasari, Kota Tangerang,
          Banten 15129 Indonesia
        </p>
        <h5 className="mt-5 mb-2">Rapier Semarang</h5>
        <p className="text-inactive">
          Jl. Mulawarman Selatan Raya No.16, Kramas, Kec. Tembalang, Kota
          Semarang, Jawa Tengah 50278 Indonesia
        </p>
      </div>
      <div className="max-tablet:mt-8 desktop:ml-[1.875rem]">
        <h5>Social Media</h5>
        <ul className="flex my-5 space-x-[.625rem]">
          {SOCIAL_MEDIA.map((icon) => (
            <li key={icon.id}>
              <Link target="_blank" href={icon.href}>
                <svg
                  className={icon.style}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="1.75rem"
                  height="1.75rem"
                >
                  <path d={icon.path} />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="p-0 m-0 leading-tight">
          <li>
            <h5>Created By ❤ Team Rapier</h5>
          </li>
          <li>
            <h5>Created UIcons By 🙏 Flaticon</h5>
          </li>
        </ul>
      </div>
    </footer>
  );
}
