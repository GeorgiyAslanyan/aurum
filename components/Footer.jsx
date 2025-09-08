// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-[#ABABAB] px-8 md:px-16 lg:px-24 py-8 z-20">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left side - Logo + Text */}
        <div className="max-w-md">
          <h2 className="text-3xl font-light tracking-widest text-white">AURUM</h2>
          <p className="mt-4 text-sm leading-relaxed">
            In collaboration with Kleros, we guarantee the utmost security for
            every transaction. Kleros a renowned decentralized arbitration
            service, ensures that every swap is executed with precision and
            security in mind.
          </p>
          
        </div>

        {/* Middle links */}
        <div className="grid grid-cols-3 gap-12 text-sm">
          {/* Get started */}
          <div>
            <h3 className="text-white font-medium mb-3">Get started</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">billb App</Link></li>
              <li><Link href="#" className="hover:text-white">billb ID</Link></li>
              <li><Link href="#" className="hover:text-white">Support About</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-medium mb-3">About</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Documentation</Link></li>
              <li><Link href="#" className="hover:text-white">Guidance</Link></li>
              <li><Link href="#" className="hover:text-white">Media Kit</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-medium mb-3">Community</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">X/Twitter</Link></li>
              <li><Link href="#" className="hover:text-white">Telegram</Link></li>
              <li><Link href="#" className="hover:text-white">Medium</Link></li>
            </ul>
          </div>
        </div>

        {/* Open App button */}
        <div className="flex items-start">
          <Link
            href="#"
            className="bg-[#FF6563] text-white px-6 py-2 rounded-full text-sm hover:bg-red-500 transition"
          >
            Open App
          </Link>
        </div>
      </div>

      {/* Bottom right links */}
      <div className="flex justify-between items-center mt-6 gap-6 text-xs text-white">
        <p className="text-xs text-white">© AurumX Labs, 2025</p>
        <div className="flex gap-3"> 
            <Link href="#" className="hover:text-white">Terms of use</Link>
        <Link href="#" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
