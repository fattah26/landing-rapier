import Image from "next/image";
import { CUSTOMERS } from "../../constants";
export default function Customers() {
  return (
    <div className="relative flex gap-[30px] scroll-content-left ">
      {CUSTOMERS.map((customer) => (
        <div
          key={customer.id}
          className="flex rounded-xl bg-white w-[112px] h-[120px] tablet:w-[130px] tablet:h-[139px] justify-center items-center"
        >
          <Image
            src={customer.src}
            width={72}
            height={80}
            alt={customer.alt}
            className="tablet:w-[90px] tablet:h-[99px] "
          />
        </div>
      ))}
    </div>
  );
}
