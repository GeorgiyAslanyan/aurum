import Image from "next/image";
import React from "react";

const Flow = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 text-white bg-[#251E1E]">
      <h2 className="text-4xl py-10">
        Protocol <span className="border-b border-red-500">Flow</span>
      </h2>
      <Image alt="bg" className="w-full" src="/flow.png" width={1533} height={814} />
    </div>
  );
};

export default Flow;
