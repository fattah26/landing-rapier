import React from "react";

export default function CircleArrow() {
  return (
    <div className="w-[50px]">
      <div className="relative items-center flex ">
        <div className="h-[2px] bg-white w-[50px] rounded-md"></div>
        <div className="w-2 h-2 bg-white rounded-full right-0 -ml-2"></div>
      </div>
    </div>
  );
}
