import Image from "next/image";
import React from "react";

const Flow = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 text-white ">
      <h2 className="text-4xl py-10">
        Protocol <span className="border-b-4 border-[#FF6563]">Flow</span>
      </h2>
      <Image alt="bg" className="h-[80vh] object-contain" src="/flow.png" width={1428} height={814} />
    </div>
  );
};

export default Flow;
