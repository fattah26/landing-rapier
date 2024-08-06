import { SERVICES } from "@/app/constants";
import Image from "next/image";

export default function OurServices() {
  return (
    <section
      id="services"
      className="px-[1.875rem] py-[3.125rem] tablet:px-[3.125rem] tablet:py-20 desktop:px-[8.125rem]"
    >
      <h1 className="text-center font-mobile-title-main tablet:font-desktop-title-main ">
        Our Superior <span className="text-alert">Service</span>
      </h1>
      <p className="font-mobile-text-main mt-[1.875rem] mb-[3.125rem] text-center tablet:font-desktop-text-main">
        We are committed to providing you with the best service.
      </p>
      <div className="space-y-[3.125rem] desktop:space-y-0  desktop:gap-[3.125rem] justify-center desktop:grid-cols-2 desktop:grid">
        {SERVICES.map((service) => (
          <div
            className={`bg-secondary space-y-[0.625rem] p-5 tablet:p-[1.625rem] rounded-[.75rem]`}
            key={service.id}
          >
            <Image
              src={service.src}
              alt={service.alt}
              width={20}
              height={20}
              className="tablet:w-10 tablet:h-10"
            />
            <h3 className="font-mobile-sub-title tablet:font-desktop-sub-title">
              {service.title}
            </h3>
            <p className="font-mobile-text-main text-inactive tablet:font-desktop-text-main">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
