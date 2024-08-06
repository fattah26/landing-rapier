import { PROJECTS } from "../constants";
import Image from "next/image";
import Link from "next/link";
import DetailItem from "../components/card/detail-item";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }) {
  const ProjectDetail = decodeURIComponent(params.ProjectDetail);
  const project = PROJECTS.find((project) => project.alt === ProjectDetail);
  if (!project) {
    notFound();
  }

  return (
    <section className="flex flex-col py-[124px] tablet:py-[160px] px-[30px] tablet:px-[50px] desktop:px-[130px] gap-[26px] justify-center items-center">
      <div className="justify-start w-full">
        <Link href="/SeeMore">
          <button className="flex flex-row justify-center items-center gap-1 tablet:gap-2 w-[93px] h-[32px] tablet:w-[113px] tablet:h-[43px] rounded-xl bg-text-color hover:bg-inactive duration-75">
            <Image
              src="/images/logo/angle-small-left.svg"
              width={20}
              height={20}
              alt=""
              className="flex fill-primary"
            />
            <p className="font-mobile-text-main text-primary tablet:text-[16px]">
              Back
            </p>
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[26px] tablet:gap-[50px] tablet:w-[565px] desktop:w-full">
        <Image
          src={project.src}
          alt={project.alt}
          width={260}
          height={194}
          className="w-full h-full rounded-xl"
        />
        <div className="flex flex-col bg-secondary rounded-xl p-[20px] gap-[10px]">
          <h1 className="font-mobile-sub-title tablet:text-[22px]">
            {project.title}
          </h1>
          <div className="flex flex-col gap-[10px]">
            <DetailItem label="Client" value={project.client} />
            <DetailItem label="Service" value={project.service} />
            <DetailItem label="Start Date" value={project.startDate} />
            <DetailItem label="End Date" value={project.endDate} />
            <DetailItem label="Description" value={project.details} />
          </div>
        </div>
      </div>
    </section>
  );
}
