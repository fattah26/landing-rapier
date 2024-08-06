import Image from "next/image";
import { PEOPLE_BEHIND } from "../../constants/index";

export default function PeopleBehind() {
  return (
    <section className="py-[3.125rem] px-[1.875rem] tablet:py-20 tablet:px-[3.125rem]">
      <h1 className="font-mobile-title-main text-center tablet:font-desktop-title-main">
        The <span className="text-alert">People</span> Behind Our Success
      </h1>
      <p className="font-mobile-text-main mb-[3.125rem] mt-[1.875rem] text-center tablet:mb-20 tablet:font-desktop-text-main">
        A Dedicated Team that Helps Make Our Vision a Reality.
      </p>
      <div className="justify-center flex">
        <div className="flex snap-x space-x-[1.625rem] desktop:justify-center overflow-x-scroll scrollbar-hidden">
          {PEOPLE_BEHIND.map((person, index) => (
            <div
              key={index}
              className="relative min-w-[18.75rem] snap-center rounded-b-xl rounded-t-xl bg-active"
            >
              <div className="relative w-full overflow-hidden h-[21.6675rem]">
                <Image
                  src={person.src}
                  alt={person.alt}
                  className="w-full h-full object-cover object-top"
                  width={260}
                  height={346.68}
                />
              </div>
              <div className="absolute bottom-0 w-full rounded-b-xl bg-secondary p-5 text-center">
                <h5 className="font-mobile-sub-title tablet:font-desktop-sub-title">
                  {person.name}
                </h5>
                <p className="font-mobile-text-main tablet:font-desktop-text-main">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
