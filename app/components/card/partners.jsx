import Image from "next/image";
import { PARTNERS } from "../../constants";

export default function Partners() {
  return (
    <div className="relative flex gap-[30px] scroll-content-right">
      {PARTNERS.map((partner) => (
        <div
          key={partner.id}
          className="flex rounded-xl bg-white w-[112px] h-[120px] tablet:w-[130px] tablet:h-[139px] justify-center items-center"
        >
          <Image
            src={partner.src}
            width={72}
            height={80}
            alt={partner.alt}
            className="tablet:w-[90px] tablet:h-[99px]"
          />
        </div>
      ))}
    </div>
  );
}
