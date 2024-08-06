import React from "react";

export default function DetailItem({ label, value }) {
  return (
    <div className="w-full flex flex-row">
      <div className="w-1/2">
        <p className="font-mobile-text-main tablet:text-[16px]">{label}</p>
      </div>
      <div className="w-1/2">
        <p className="font-mobile-text-main tablet:text-[16px]">{value}</p>
      </div>
    </div>
  );
}
