"use client";

import Image from "next/image";
import Head from "next/head";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)


  const arr = [
    { num: 0, sym: "", isBlured: true },
    { num: 0, sym: "", isBlured: true },
    { num: 0, sym: "", isBlured: true },
    { num: 32, sym: "Ge", isBlured: true },
    { num: 33, sym: "As", isBlured: true },
    { num: 0, sym: "", isBlured: true },
    { num: 0, sym: "", isBlured: true },
    { num: 0, sym: "", isBlured: true },
    { num: 50, sym: "Sn", isBlured: true },
    { num: 51, sym: "Sb", isBlured: true },
    { num: 79, sym: "AU", isBlured: false },
    { num: 80, sym: "Hg", isBlured: true },
    { num: 81, sym: "Tl", isBlured: true },
    { num: 82, sym: "Pb", isBlured: true },
    { num: 83, sym: "Bi", isBlured: true },
    { num: 0, sym: "", isBlured: true },
    { num: 112, sym: "Cn", isBlured: true },
    {
      sym: (
        <Image
          src="/contacts/md.svg"
          alt="Aurum md"
          width={70}
          height={40}
          objectFit="cover"
          priority
          className="w-3/4 "
        />
      ),
      isBlured: false,
      link: "https://medium.com/AurumXLabs",
    },
    {
      sym: (
        <Image
          src="/contacts/x.svg"
          alt="Aurum x"
          width={43}
          height={40}
          objectFit="cover"
          priority
          className="w-3/4 "
        />
      ),
      isBlured: false,
      link: "https://x.com/AurumXLabs",
    },
    {
      sym: (
        <Image
          src="/contacts/book.svg"
          alt="Aurum book"
          width={44}
          height={40}
          objectFit="cover"
          priority
          className="w-3/4 "
        />
      ),
      isBlured: false,
    },
  ];

  const mobileArr = [
    { num: 0, sym: "", isBlured: true },
    { num: 0, sym: "", isBlured: true },
    { num: 0, sym: "", isBlured: true },
    { num: 50, sym: "Sn", isBlured: true },
    { num: 79, sym: "AU", isBlured: false },
    { num: 80, sym: "Hg", isBlured: true },
    { num: 81, sym: "Tl", isBlured: true },
    { num: 82, sym: "Pb", isBlured: true },
    { num: 0, sym: "", isBlured: true },
    {
      sym: (
        <Image
          src="/contacts/md.svg"
          alt="Aurum md"
          width={70}
          height={40}
          objectFit="cover"
          priority
          className="w-3/4 "
        />
      ),
      isBlured: false,
      link: "https://medium.com/AurumXLabs",
    },
    {
      sym: (
        <Image
          src="/contacts/x.svg"
          alt="Aurum x"
          width={43}
          height={40}
          objectFit="cover"
          priority
          className="w-3/4 "
        />
      ),
      isBlured: false,
      link: "https://x.com/AurumXLabs",
    },
    {
      sym: (
        <Image
          src="/contacts/book.svg"
          alt="Aurum book"
          width={44}
          height={40}
          objectFit="cover"
          priority
          className="w-3/4 "
        />
      ),
      isBlured: false,
    },
  ];

  const mainRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mainRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        mainRef.current.getBoundingClientRect();

      const x = (clientX - left - width / 2) / (width / 2);
      const y = (clientY - top - height / 2) / (height / 2);

      elementsRef.current.forEach((element, index) => {
        if (!element) return;

        const speed = 0.05 + index * 0.01;

        const xOffset = x * 60 * speed;
        const yOffset = y * 60 * speed;

        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <main
        ref={mainRef}
        className="min-h-screen relative bg-gradient-to-b from-[#262626] to-[#261616] text-white overflow-hidden font-mono"
      >
        <div
          ref={(el) => (elementsRef.current[0] = el)}
          className="absolute w-full h-full pointer-events-none " 
        >
          <Image
            src="/background.svg"
            alt="Aurum background"
            layout="fill"
            objectFit="cover"
            priority
            className="transition-transform duration-300 ease-out"
          />
        </div>

        <div className="h-[80vh]  lg:h-full">
          <div className="absolute top-6 right-6 z-40  hidden lg:flex">
          <div onClick={() => setIsModalOpen(true)} className="cursor-pointer hover:border-b-4 border-b-red-500 hover:scale-110 transition-all duration-300 ease-out">
            GO TO APP
          </div>
        </div>


        <div
            ref={(el) => (elementsRef.current[4] = el)}
            className="translate-x-[200%] translate-y-[190%] flex lg:hidden  group hover:scale-110 lg:relative  transition-all absolute z-50 items-center justify-center  duration-300 ease-out"
          >
            <div onClick={() => setIsModalOpen(true)} className="cursor-pointer text-xs absolute right-2 -top-5  hover:border-b-4 border-b-red-500 hover:scale-110 transition-all duration-300 ease-out">
            GO TO APP
          </div>
            <Image
              src="/mobile/app.svg"
              alt="Aurum background"
              width={100}
              height={49}
              objectFit="cover"
              priority
              className="w-24"
            />
          </div>
        

        <div
          ref={(el) => (elementsRef.current[1] = el)}
          className="absolute w-screen lg:w-fit lg:left-12 justify-items-center lg:justify-items-start top-5 lg:top-20 z-30 transition-transform duration-300 ease-out"
        >
          <Image
            src="/logo.svg"
            alt="Aurum logo"
            width={239}
            height={35}
            objectFit="cover"
            priority
            className="h-full w-[150px] lg:w-[239px]"
          />
        </div>
        <div
          ref={(el) => (elementsRef.current[2] = el)}
          className="absolute pointer-events-none pl-10 py-10  h-[80vh] content-center lg:h-screen w-screen z-20 animate-fade-in transition-transform duration-300 ease-out"
        >
          <Image
            src="/grid.svg"
            alt="Aurum grid"
            width={300}
            height={900}
            objectFit="cover"
            priority
            className="h-1/2 w-fit lg:h-full"
          />
        </div>
        <section className="w-full flex items-center justify-center z-0 h-[80vh] lg:h-screen">
          <div
            ref={(el) => (elementsRef.current[3] = el)}
            className="z-10 absolute text-xl lg:text-6xl flex translate-x-10 lg:translate-x-0 flex-col gap-1 translate-y-[-30%] lg:translate-y-0 lg:gap-5 transition-transform duration-300 ease-out"
          >
            <h2 className="-translate-x-5 lg:-translate-x-20">Locked.</h2>
            <h2>Listed.</h2>
            <h2 className="translate-x-5 lg:translate-x-20">Liquid.</h2>
          </div>

          <div
            ref={(el) => (elementsRef.current[4] = el)}
            className="translate-x-[190%] hidden lg:flex  group hover:scale-110 relative  transition-all translate-y-[-190%] z-10 items-center justify-center  duration-300 ease-out"
          >
            <a
              href="https://t.me/AurumXLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute text-xl transition-all ease-linear duration-300 group-hover:border-b-4 border-b-red-500 group-hover:scale-110"
            >
              JOIN US
            </a>
            <Image
              src="/join.svg"
              alt="Aurum background"
              width={273}
              height={154}
              objectFit="cover"
              priority
              className="w-44"
            />
          </div>
          <div
            ref={(el) => (elementsRef.current[4] = el)}
            className="translate-x-[-20%] translate-y-[100%] flex lg:hidden  group hover:scale-110 relative  transition-all  z-50 items-center justify-center  duration-300 ease-out"
          >
            <a
              href="https://t.me/AurumXLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute text-xl bottom-2 right-2 transition-all ease-linear duration-300 group-hover:border-b-4 border-b-red-500 group-hover:scale-110"
            >
              JOIN US
            </a>
            <Image
              src="/mobile/join.svg"
              alt="Aurum background"
              width={212}
              height={130}
              objectFit="cover"
              priority
              className="w-44"
            />
          </div>

          <div
            ref={(el) => (elementsRef.current[5] = el)}
            className="pointer-events-none absolute transition-transform duration-300 ease-out"
          >
            <Image
              src="/rect.svg"
              alt="Aurum background"
              width={1080}
              height={1080}
              objectFit="cover"
              priority
              className="h-[40vh] translate-y-[-10%] lg:translate-y-0 lg:h-[90vh] brightness-110 contrast-125 grayscale-25"
            />
          </div>

          <div
            ref={(el) => (elementsRef.current[6] = el)}
            className="pointer-events-none absolute transition-transform duration-300 ease-out"
          >
            <Image
              src="/borderRectangle.svg"
              alt="Aurum background"
              width={1080}
              height={1080}
              objectFit="cover"
              priority
              className="h-[40vh] translate-y-[-10%] lg:translate-y-0 lg:h-[90vh]"
            />
          </div>
        </section>
        </div>

        <div
          ref={(el) => (elementsRef.current[7] = el)}
          className="absolute flex flex-col right-4 lg:right-14 bottom-14 lg:bottom-10 z-30 transition-transform duration-300 ease-out"
        >
          <aside className="grid lg:hidden grid-cols-4 gap-2 w-fit">
            {mobileArr.map((el, idx) =>
              el.num === 0 ? (
                <div key={idx} className="pointer-events-none"></div>
              ) : el.link ? (
                <a
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                  className={`${
                    el.isBlured ? "" : "cursor-pointer"
                  } w-16 lg:w-24 h-16 lg:h-24 rounded-xl backdrop-blur-2xl bg-black/10 flex flex-col items-center justify-center text-white/80 hover:scale-105 transition-all duration-300 ease-out`}
                >
                  <Image
                    src="/border.svg"
                    alt="Aurum background"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="w-full h-full  pointer-events-none"
                  />
                  <span
                    className={`${
                      el.isBlured ? "blur-[1px] " : " "
                    } text-[11px] font-sans absolute left-1 top-1 text-white/50`}
                  >
                    {el.num ?? ""}
                  </span>
                  <span
                    className={`${
                      el.isBlured ? "blur-[2px] " : " "
                    } text-2xl font-medium flex items-center justify-center`}
                  >
                    {el.sym}
                  </span>
                </a>
              ) : (
                <div
                  key={idx}
                  className={`${
                    el.isBlured ? "" : "cursor-pointer"
                  } w-16 lg:w-24 h-16 lg:h-24 rounded-xl backdrop-blur-2xl bg-black/10 flex flex-col items-center justify-center text-white/80 hover:scale-105 transition-all duration-300 ease-out`}
                >
                  <Image
                    src="/border.svg"
                    alt="Aurum background"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="w-full h-full pointer-events-none"
                  />
                  <span
                    className={`${
                      el.isBlured ? "blur-[1px] " : " "
                    } text-[11px] font-sans absolute left-1 top-1 text-white/50`}
                  >
                    {el.num ?? ""}
                  </span>
                  <span
                    className={`${
                      el.isBlured ? "blur-[2px] " : " "
                    } text-2xl font-medium flex items-center justify-center`}
                  >
                    {el.sym}
                  </span>
                </div>
              )
            )}
          </aside>
          <aside className="hidden lg:grid grid-cols-5 gap-4 w-fit">
            {arr.map((el, idx) =>
              el.num === 0 ? (
                <div key={idx}></div>
              ) : el.link ? (
                <a
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                  ref={(el) => (elementsRef.current[8 + idx] = el)}
                  className={`${
                    el.isBlured ? "" : "cursor-pointer"
                  } w-16 lg:w-24 h-16 lg:h-24 rounded-xl backdrop-blur-2xl bg-black/10 flex flex-col items-center justify-center text-white/80 hover:scale-105 transition-all duration-300 ease-out`}
                >
                  <Image
                    src="/border.svg"
                    alt="Aurum background"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="w-full h-full"
                  />
                  <span
                    className={`${
                      el.isBlured ? "blur-[2px] " : " "
                    } text-[11px] font-sans absolute left-3 top-2 text-white/50`}
                  >
                    {el.num ?? ""}
                  </span>
                  <span
                    className={`${
                      el.isBlured ? "blur-[4px] " : " "
                    } text-4xl font-medium flex items-center justify-center`}
                  >
                    {el.sym}
                  </span>
                </a>
              ) : (
                <div
                  key={idx}
                  ref={(el) => (elementsRef.current[8 + idx] = el)}
                  className={`${
                    el.isBlured ? "" : "cursor-pointer"
                  } w-16 lg:w-24 h-16 lg:h-24 rounded-xl backdrop-blur-2xl bg-black/10 flex flex-col items-center justify-center text-white/80 hover:scale-105 transition-all duration-300 ease-out`}
                >
                  <Image
                    src="/border.svg"
                    alt="Aurum background"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="w-full h-full"
                  />
                  <span
                    className={`${
                      el.isBlured ? "blur-[2px] " : " "
                    } text-[11px] font-sans absolute left-3 top-2 text-white/50`}
                  >
                    {el.num ?? ""}
                  </span>
                  <span
                    className={`${
                      el.isBlured ? "blur-[4px] " : " "
                    } text-4xl font-medium flex items-center justify-center`}
                  >
                    {el.sym}
                  </span>
                </div>
              )
            )}
          </aside>
          <div className="w-full hidden lg:flex max-w-fit pt-3">
            <Image
              src="/bottomer.svg"
              alt="Aurum background"
              width={544}
              height={20}
              priority
              className="h-auto"
            />
          </div>
        </div>

        {/* Нижняя панель */}
        <div className="absolute w-screen lg:w-fit  lg:left-10 bottom-3 justify-items-center lg:justify-items-start z-20 text-xs">
          <p>© AurumX Labs, 2025</p>
        </div>

        <style jsx global>{`
          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-up {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 1s ease forwards;
          }
          .animate-fade-up {
            animation: fade-up 1s ease forwards;
          }
        `}</style>
      </main>
      {isModalOpen && <div onClick={() => setIsModalOpen(false)} className='fixed top-0 left-0 w-full h-full flex flex-col z-[100] items-center justify-center backdrop-blur-lg'>
            <div className='px-11 py-7 rounded-xl bg-[#00000080] font-semibold text-lg relative'>
              <p>Coming soon //</p>
              <button className='absolute top-2 right-2 rounded-full min-h-5 min-w-5 leading-none flex items-center justify-center bg-[#904848cc] text-white hover:bg-[#d05959cc]'>-</button>
            </div>
      </div>}
    </>
  );
}
