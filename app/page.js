"use client";

import Image from "next/image";
import Head from "next/head";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
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
    { sym: <Image
            src="/contacts/md.svg"
            alt="Aurum md"
            width={70}
            height={40}
            objectFit="cover"
            priority
            className="w-3/4 "
          />, isBlured: false },
    { sym: <Image
            src="/contacts/x.svg"
            alt="Aurum x"
            width={43}
            height={40}
            objectFit="cover"
            priority
            className="w-3/4 "
          />, isBlured: false },
    { sym: <Image
            src="/contacts/book.svg"
            alt="Aurum book"
            width={44}
            height={40}
            objectFit="cover"
            priority
            className="w-3/4 "
          />, isBlured: false },
  ];

  const mainRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mainRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = mainRef.current.getBoundingClientRect();
      
      // Нормализованные координаты мыши относительно центра экрана (-1 до 1)
      const x = (clientX - left - width / 2) / (width / 2);
      const y = (clientY - top - height / 2) / (height / 2);

      elementsRef.current.forEach((element, index) => {
        if (!element) return;
        
        // Разные элементы будут двигаться с разной скоростью
        const speed = 0.05 + (index * 0.01);
        
        // Вычисляем смещение
        const xOffset = x * 60 * speed;
        const yOffset = y * 60 * speed;
        
        // Применяем трансформацию
        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <main 
        ref={mainRef}
        className="min-h-screen relative bg-gradient-to-b from-[#262626] to-[#261616] text-white overflow-hidden font-mono"
      >
        <div 
          ref={el => elementsRef.current[0] = el}
          className="absolute w-full h-full"
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

        <div className="absolute top-6 right-6 z-40">
          <a href="#" target="_blank" rel="noopener noreferrer" className="">
            GO TO APP
          </a>
        </div>

        <div 
          ref={el => elementsRef.current[1] = el}
          className="absolute left-12 top-20 z-30 transition-transform duration-300 ease-out"
        >
          <Image
            src="/logo.svg"
            alt="Aurum logo"
            width={239}
            height={35}
            objectFit="cover"
            priority
            className="h-full"
          />
        </div>
        <div 
          ref={el => elementsRef.current[2] = el}
          className="absolute pointer-events-none pl-10 py-10 h-screen w-screen z-20 animate-fade-in transition-transform duration-300 ease-out"
        >
          <Image
            src="/grid.svg"
            alt="Aurum background"
            width={300}
            height={900}
            objectFit="cover"
            priority
            className="h-full"
          />
        </div>
        <section className="w-full flex items-center justify-center z-0 h-screen">
          <div 
            ref={el => elementsRef.current[3] = el}
            className="z-10 absolute text-6xl flex flex-col gap-5 transition-transform duration-300 ease-out"
          >
            <h2 className="-translate-x-20">Locked.</h2>
            <h2>Listed.</h2>
            <h2 className="translate-x-20">Liquid.</h2>
          </div>
          
          <div 
            ref={el => elementsRef.current[4] = el}
            className="translate-x-[190%] group hover:scale-110 relative  transition-all translate-y-[-190%] z-10 items-center justify-center flex duration-300 ease-out"
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute text-xl group-hover:scale-110"
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
            ref={el => elementsRef.current[5] = el}
            className="absolute transition-transform duration-300 ease-out"
          >
            <Image
              src="/rect.svg"
              alt="Aurum background"
              width={1080}
              height={1080}
              objectFit="cover"
              priority
              className="h-[90vh] brightness-110 contrast-125 grayscale-25"
            />
          </div>
          
          <div 
            ref={el => elementsRef.current[6] = el}
            className="absolute transition-transform duration-300 ease-out"
          >
            <Image
              src="/borderRectangle.svg"
              alt="Aurum background"
              width={1080}
              height={1080}
              objectFit="cover"
              priority
              className="h-[90vh]"
            />
          </div>
        </section>

        <div 
          ref={el => elementsRef.current[7] = el}
          className="absolute flex flex-col right-14 bottom-10 z-30 transition-transform duration-300 ease-out"
        >
          <aside className="grid grid-cols-5 gap-4 w-fit">
            {arr.map((el, idx) =>
              el.num === 0 ? (
                <div key={idx}></div>
              ) : (
                <div
                  key={idx}
                  ref={el => elementsRef.current[8 + idx] = el}
                  className={`${el.isBlured ? "" : "cursor-pointer"} w-24 h-24 rounded-xl backdrop-blur-2xl bg-black/10 flex flex-col items-center justify-center text-white/80 hover:scale-105 transition-all duration-300 ease-out`}
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
          <div className="w-full max-w-fit pt-3">
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
        <div className="absolute left-10 bottom-8 z-20 text-xs">
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
    </>
  );
}