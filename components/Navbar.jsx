import Image from "next/image";
import React from "react";

const Navbar = ({setIsModalOpen}) => {
  return (
    <div className="fixed py-4 px-6 z-[100] flex justify-between top-0 left-0 w-screen">
      <div></div>
      <div className="flex gap-5 font-semibold">
        {/* <div
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer bg-[#353535] text-[#FF6563] px-4 py-2 rounded-2xl hover:scale-110 transition-all duration-300 ease-out"
        >
          BUY AU
        </div>
        <div
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer bg-[#43434315] text-white flex gap-2  px-4 py-2 rounded-2xl hover:scale-110 transition-all duration-300 ease-out"
        >
          <Image src="/gitbook.svg" alt="gitbook" height={24} width={24} />
          Docs
        </div> */}
        {/* <div
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer bg-[#FF6563] text-white  px-4 py-2 rounded-full hover:scale-110 transition-all duration-300 ease-out"
        >
          Open App
        </div> */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer  text-white font-normal py-2 rounded-full hover:scale-110 transition-all duration-300 ease-out"
        >
          Open App
        </div>
      </div>
    </div>
  );
};

export default Navbar;
