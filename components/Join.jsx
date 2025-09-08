import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Join = () => {
  const mainRef = useRef(null);
          const elementsRef = useRef([]);

  useEffect(() => {
  // === Mouse move параллакс ===
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

      element.dataset.mouseX = xOffset;
      element.dataset.mouseY = yOffset;
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  // === Автоматическая анимация ===
  let frame = 0;
  const animate = () => {
    frame += 0.005;
    elementsRef.current.forEach((element, index) => {
      if (!element) return;

      const floatX = Math.sin(frame + index) * (5 + index * 2);
      const floatY = Math.cos(frame + index) * (5 + index * 2);

      const mouseX = parseFloat(element.dataset.mouseX || 0);
      const mouseY = parseFloat(element.dataset.mouseY || 0);

      element.style.transform = `translate(${mouseX + floatX}px, ${
        mouseY + floatY
      }px)`;
    });

    requestAnimationFrame(animate);
  };

  animate();

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []); 

  return (
    <div
      ref={mainRef}
      className="flex flex-col justify-center relative min-h-[50vh] items-center gap-10 px-10 text-white "
    >
      <div>
        {/* rect1 */}
        <Image
          src="/join/rect1.png"
          ref={(el) => (elementsRef.current[0] = el)}
          width={120}
          alt="rect1"
          height={120}
          className="w-12 h-12 absolute top-4 right-1/4"
        />
        {/* rect2 */}
        <Image
          src="/join/rect2.png"
          width={120}
          alt="rect2"
          height={120}
          className="w-14 h-14 absolute top-12 left-1/4"
          ref={(el) => (elementsRef.current[1] = el)}
        />
        {/* rect3 */}
        <Image
          src="/join/rect3.png"
          width={120}
          alt="rect3"
          height={120}
          className="w-13 h-13 absolute bottom-10 right-1/6"
          ref={(el) => (elementsRef.current[2] = el)}
        />
        {/* rect4 */}
        <Image
          src="/join/rect4.png"
          width={120}
          alt="rect4"
          height={120}
          className="w-16 h-16 absolute bottom-12 left-1/12"
          ref={(el) => (elementsRef.current[3] = el)}
        />
      </div>

      <h2 className="text-4xl text-center z-10">
        Join our{" "}
        <span className="border-b-4 border-[#FF6563]">community!</span>
      </h2>

      <p className="max-w-lg text-center z-10">
        A platform for private P2P deals involving locked assets, utilizing
        smart contract–based escrow services.
      </p>

      {/* Links */}
      <div className="grid grid-cols-2 gap-10 z-10">
        <a
          href="https://x.com/AurumXLabs"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-24 lg:w-32 h-24 lg:h-32"
        >
          <div className="w-24 lg:w-32 h-24 lg:h-32 rounded-xl backdrop-blur-xl bg-black/10 flex flex-col text-center items-center justify-center text-white/80">
            <Image
              src="/border.svg"
              alt="Aurum background"
              layout="fill"
              objectFit="cover"
              priority
              className="w-full h-full"
            />
            <Image
              src="/join/x.svg"
              alt="Aurum background"
              width={120}
              height={120}
              priority
              className="w-12 h-12"
            />
          </div>
        </a>

        <a
          href="https://t.me/AurumXLabs"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-24 lg:w-32 h-24 lg:h-32"
        >
          <div className="w-24 lg:w-32 h-24 lg:h-32 rounded-xl backdrop-blur-xl bg-black/10 flex flex-col text-center items-center justify-center text-white/80">
            <Image
              src="/border.svg"
              alt="Aurum background"
              layout="fill"
              objectFit="cover"
              priority
              className="w-full h-full"
            />
            <Image
              src="/join/tg.svg"
              alt="Aurum background"
              width={120}
              height={120}
              priority
              className="w-12 h-12"
            />
          </div>
        </a>
      </div>

      {/* Background image */}
      <Image
        alt="bg"
        className="h-[60vh] object-contain absolute z-0"
        src="/join/finger.png"
        width={1800}
        height={800}
      />
    </div>
  );
};

export default Join;
