import Link from "next/link";
import { PROJECTS } from "../constants";
import Image from "next/image";

export default function SeeMore() {
  return (
    <section className="flex flex-col justify-center items-center py-[124px] tablet:py-[160px] px-[30px] tablet:px-[50px] desktop:px-[130px] gap-[100px] tablet:gap-[80px]">
      <div className="flex flex-col text-center gap-[30px] tablet:px-[50px] desktop:px-[130px] ">
        <h1 className="font-mobile-title-main tablet:text-[48px]">
          Our <span className="text-alert">Footsteps </span>Lead Us
          <span className="text-alert"> to Success</span>
        </h1>
      </div>
      <div className="flex">
        <div className="grid grid-cols-1 desktop:grid-cols-3 gap-[50px] justify-center items-center w-full h-full">
          {PROJECTS.map((project) => (
            <Link
              href={`/${project.alt}`}
              key={project.id}
              className="flex flex-col w-[260px] tablet:w-[360px] tablet:h-[377px] rounded-xl overflow-hidden hover:scale-105 duration-150"
            >
              <Image
                src={project.src}
                alt={project.alt}
                width={260}
                height={194}
                className="flex w-full tablet:h-[269px]"
              />
              <div className="flex flex-col bg-secondary py-[26px] gap-[10px]justify-center items-center break-words text-center">
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
    </section>
  );
}
