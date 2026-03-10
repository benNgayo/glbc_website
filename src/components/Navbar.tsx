"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navItems } from "@/lib/navigation";
import MobileNavigation from "./Navbar/MobileNavigation";
import DesktopNavigation from "./Navbar/DesktopNavigation";
import Link from "next/link";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full  flex  text-white font-sans bg-primary `}>
      <div
        className={`flex justify-between items-center font-semibold z-20 w-full xl:w-2/3 mx-auto fixed md:top-4 left-1/2 transform -translate-x-1/2 py-4 px-4 transition-all duration-600 ease-in-out ${scrolled ? "bg-glbc-secondary  rounded-b-2xl md:rounded-2xl" : "bg-transparent"}`}
      >
        <div className="flex justify-between items-center font-semibold cursor-pointer">
          <Link href="/">
            <Image
              src="/logo-white.png"
              alt="GLBC Logo"
              width={75}
              height={75}
            />
          </Link>
          <div className="font-serif text-lg">
            <h1 className="block lg:hidden">GLBC</h1>
            <div className="hidden lg:block">
              <h1>Grace Life</h1>
              <h1>Bible College</h1>
            </div>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <DesktopNavigation navItems={navItems} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <MobileNavigation navItems={navItems} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
