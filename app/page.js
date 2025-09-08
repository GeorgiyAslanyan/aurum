"use client";

import Flow from "@/components/Flow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Join from "@/components/Join";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Roadmap from "@/components/Roadmap";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

   const mainRef = useRef(null);
        const elementsRef = useRef([]);

  return (
    <>
      <main
        ref={mainRef}
        className="bg-gradient-to-b from-[#262626] to-[#261616] text-white overflow-hidden font-mono flex flex-col gap-5"
      >
        <Navbar isModalOpen={isModalOpen}  setIsModalOpen={setIsModalOpen} />
        <Hero mainRef={mainRef} elementsRef={elementsRef}/>
        {/* <Products />
        <Flow />
        <Roadmap />
        <Join mainRef={mainRef} elementsRef={elementsRef}/>
        <Footer /> */}
      </main>
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed top-0 left-0 w-full h-full flex flex-col z-[100] items-center justify-center backdrop-blur-lg"
        >
          <div className="px-11 py-7 w-[230px] h-[88px] rounded-2xl bg-[#00000080] font-semibold text-lg relative">
            <Image
              src="/modalBorder.svg"
              alt="Aurum background"
              layout="fill"
              objectFit="cover"
              priority
              className="w-full absolute h-full pointer-events-none"
            />
            <p className="border-b-4 border-b-[#FF6563]">OPENING SOON</p>
            <button className="absolute top-2 right-2 rounded-full min-h-5 cursor-pointer min-w-5 leading-none flex font-medium items-center justify-center ease-linear duration-200 transition-all bg-[#904848cc] hover:scale-110 text-white hover:bg-[#FF6563]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
