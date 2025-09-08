import React, { useEffect, useRef } from 'react'
import Head from "next/head";
import { ArrowUpRight } from "lucide-react";
import Image from 'next/image';
import Navbar from './Navbar';


const Hero = ({mainRef, elementsRef}) => {
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
          link: "https://medium.com/@AurumXLabs/decentralized-gold-in-defi-137f6a7cffd8",
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
          link: "https://aurumx.gitbook.io/aurumx-labs"
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
          link: "https://medium.com/@AurumXLabs/decentralized-gold-in-defi-137f6a7cffd8",
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
          link: "https://aurumx.gitbook.io/aurumx-labs"
        },
      ];
    
     
    
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
    <div className='min-h-screen relative '>
      <div
              className=" absolute top-6 left-6 justify-center lg:justify-start lg:top-20 z-[40] transition-transform duration-300 ease-out"
            >
              <Image
                src="/logo.png"
                alt="Aurum logo"
                width={239}
                height={35}
                objectFit="cover"
                priority
                className="w-[150px] lg:w-[239px]"
              />
            </div>
    <div
          ref={(el) => (elementsRef.current[0] = el)}
          className="absolute w-full h-full pointer-events-none "
        >
          <Image
            src="/background.png"
            alt="Aurum background"
            width={1920}
            height={1080}
            className="transition-transform w-screen duration-300 ease-out"
          />
        </div>
        <div className="h-[80vh] lg:h-full">
          <div
            ref={(el) => (elementsRef.current[2] = el)}
            className="absolute hidden lg:flex pointer-events-none pl-10 py-10  h-[80vh] content-center lg:h-screen w-screen z-[30] animate-fade-in transition-transform duration-300 ease-out"
          >
            <Image
              src="/grid.png"
              alt="Aurum grid"
              width={300}
              height={900}
              objectFit="cover"
              priority
              className="h-1/2 w-fit sm:h-full"
            />
          </div>
          <section className="w-full relative flex items-center max-w-[380px] justify-self-center lg:max-w-none justify-center z-0 h-[80vh] lg:h-screen">
            <div
              ref={(el) => (elementsRef.current[3] = el)}
              className="z-10 absolute text-2xl font-semibold lg:text-6xl hidden lg:flex translate-x-10 lg:translate-x-0 flex-col gap-1 translate-y-[-30%] lg:translate-y-0 lg:gap-5 transition-transform duration-300 ease-out"
            >
              <h2 className="-translate-x-5 lg:-translate-x-20">Locked.</h2>
              <h2>Listed.</h2>
              <h2 className="translate-x-5 lg:translate-x-20">Liquid.</h2>
            </div>
           

            <div
              ref={(el) => (elementsRef.current[5] = el)}
              className="pointer-events-none absolute transition-transform duration-300 ease-out lg:hidden z-50"
            >
              <Image
                src="/mobile/rect.png"
                alt="Aurum rect"
                width={1080}
                height={1080}
                objectFit="cover"
                priority
                className="w-full translate-y-[-10%] lg:translate-y-0 lg:h-[90vh] brightness-110 contrast-125 grayscale-25"
              />
            </div>

            <div
              ref={(el) => (elementsRef.current[5] = el)}
              className="pointer-events-none absolute transition-transform duration-300 ease-out"
            >
              <Image
                src="/rect.png"
                alt="Aurum background"
                width={1080}
                height={1080}
                priority
                className="h-[40vh] object-contain translate-y-[-10%] hidden lg:flex lg:translate-y-0 lg:h-[90vh] "
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
                className="h-[40vh] translate-y-[-10%]  hidden lg:flex lg:translate-y-0 lg:h-[90vh]"
              />
            </div>
          </section>
        </div>

        <div
          ref={(el) => (elementsRef.current[7] = el)}
          className="absolute flex items-center flex-col right-4 lg:right-14 pl-4 bottom-14 w-[calc(100%-1rem)] md:w-fit lg:bottom-10 z-30 transition-transform duration-300 ease-out"
        >
          <aside className="grid md:hidden grid-cols-4 gap-2 w-full max-w-[283px] min-[380]:max-w-[498px] ">
            {mobileArr.map((el, idx) =>
              el.num === 0 ? (
                <div
                  key={idx}
                  className="pointer-events-none  aspect-square"
                ></div>
              ) : el.link ? (
                <a
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                  className={`${
                    el.isBlured ? "" : "cursor-pointer"
                  } aspect-square w-full rounded-xl backdrop-blur-2xl bg-black/10 flex flex-col items-center justify-center text-white/80 hover:scale-105 transition-all duration-300 ease-out`}
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
                  } aspect-square  w-full rounded-xl backdrop-blur-2xl bg-black/10 flex flex-col items-center justify-center text-white/80 hover:scale-105 transition-all duration-300 ease-out`}
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
          <aside className="hidden md:grid grid-cols-5 gap-4 w-fit">
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
        <div className="absolute w-screen lg:w-fit  lg:left-10 bottom-3 flex justify-center lg:justify-start z-20 text-xs">
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
        `}</style></div>
  )
}

export default Hero