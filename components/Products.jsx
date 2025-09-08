import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 text-white">
      <h2 className="text-4xl py-10">Core <span className="border-b-4 border-[#FF6563]">Products</span></h2>
      <div className="grid grid-cols-3 gap-10">
        {/* Первый продукт */}
        <div className="flex items-center flex-col gap-4">
          <div className="relative w-24 lg:w-32 h-24 lg:h-32 ">
            <div
              style={{ backgroundColor: "#FF6563", top: "16px", right: "8px" }}
              className="rounded-full z-0 absolute min-w-5 min-h-5 animate-float"
            ></div>
            <div
              className={`w-24 lg:w-32 h-24 lg:h-32 rounded-xl backdrop-blur-2xl bg-black/10 flex flex-col text-center items-center justify-center text-white/80 `}
            >
              <Image
                src="/border.svg"
                alt="Aurum background"
                layout="fill"
                objectFit="cover"
                priority
                className="w-full h-full"
              />
              <span className={` text-[11px] font-sans absolute left-3 top-2 `}>
                Market
              </span>
              <span
                className={` text-4xl font-medium flex items-center justify-center`}
              >
                dM
              </span>
            </div>
          </div>
          <Image
            src="/products/borderRed.svg"
            alt="product"
            width={300}
            height={20}
            objectFit="cover"
            priority
            className="w-1/2"
          />
          <p className="text-center font-light">
            A marketplace for trading, auctions, and lending secured by locked
            assets. AurumX connects holders of locked liquidity, investors, and
            traders, creating a new market for assets that were previously
            considered "frozen."
          </p>
        </div>

        {/* Второй продукт */}
        <div className="flex items-center flex-col gap-4">
          <div className="relative w-24 lg:w-32 h-24 lg:h-32 ">
            <div
              style={{ backgroundColor: "#FF6563", top: "16px", right: "8px" }}
              className="rounded-full z-0 absolute min-w-5 min-h-5 animate-float-delayed"
            ></div>
            <div
              className={`w-24 lg:w-32 h-24 lg:h-32 rounded-xl backdrop-blur-2xl bg-black/10 flex flex-col text-center items-center justify-center text-white/80 `}
            >
              <Image
                src="/border.svg"
                alt="Aurum background"
                layout="fill"
                objectFit="cover"
                priority
                className="w-full h-full"
              />
              <span className={` text-[11px] font-sans absolute left-3 top-2 `}>
                Escrow
              </span>
              <span
                className={` text-4xl font-medium flex items-center justify-center`}
              >
                dE
              </span>
            </div>
          </div>
          <Image
            src="/products/border.svg"
            alt="product"
            width={300}
            height={20}
            objectFit="cover"
            priority
            className="w-1/2"
          />
          <p className="text-center font-light">
            A platform for private P2P deals involving locked assets, utilizing
            smart contract-based escrow services. AurumX enables secure and
            confidential transactions between buyers and sellers, acting as a
            decentralized guarantor.
          </p>
        </div>

        {/* Третий продукт */}
        <div className="flex items-center flex-col gap-4">
          <div className="relative w-24 lg:w-32 h-24 lg:h-32 ">
            <div
              style={{ backgroundColor: "#FF6563", top: "16px", right: "8px" }}
              className="rounded-full z-0 absolute min-w-5 min-h-5 animate-float-more-delayed"
            ></div>
            <div
              className={`w-24 lg:w-32 h-24 lg:h-32 rounded-xl backdrop-blur-2xl bg-black/10 flex flex-col text-center items-center justify-center text-white/80 `}
            >
              <Image
                src="/border.svg"
                alt="Aurum background"
                layout="fill"
                objectFit="cover"
                priority
                className="w-full h-full"
              />
              <span className={` text-[11px] font-sans absolute left-3 top-2 `}>
                Lending
              </span>
              <span
                className={` text-4xl font-medium flex items-center justify-center`}
              >
                dL
              </span>
            </div>
          </div>
          <Image
            src="/products/border.svg"
            alt="product"
            width={300}
            height={20}
            objectFit="cover"
            priority
            className="w-1/2"
          />
          <p className="text-center font-light">
            A platform for lending secured by DEX-related tokens, where users
            can borrow and provide loans using ERC-20 assets as collateral.
            AurumX establishes a decentralized P2P lending system, unlocking
            liquidity for holders of any ERC-20 tokens.
          </p>
        </div>
      </div>

      {/* Добавляем стили для анимации */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-22px, 28px);
          }
          50% {
            transform: translate(-4px, -8px);
          }
          75% {
            transform: translate(8px, 4px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-more-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Products;