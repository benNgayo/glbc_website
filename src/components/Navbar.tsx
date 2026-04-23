"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navItems } from "@/lib/navigation";
import MobileNavigation from "./Navbar/MobileNavigation";
import DesktopNavigation from "./Navbar/DesktopNavigation";
import Link from "next/link";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // if (currentScrollY > lastScrollY && currentScrollY > 100) {
      //   setShowNav(false);
      // } else {
      //   setShowNav(true);
      // }
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      if (scrollDifference > 10) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
      }
      lastScrollY = currentScrollY;
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full  flex  text-white font-sans bg-primary `}>
      <div
        className={`flex justify-between items-center font-semibold z-20 w-full md:max-w-6xl mx-auto fixed  ${showNav ? "translate-y-0" : "-translate-y-25"} md:top-4 left-1/2 transform -translate-x-1/2 py-2 px-4 transition-all duration-600 ease-in-out ${scrolled ? "bg-glbc-secondary  rounded-b-2xl md:rounded-2xl" : "bg-transparent"}`}
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
            <h1 className="block md:hidden">GLBC</h1>
            <div className="hidden md:block">
              <Link href="/">
                <h1>Grace Life</h1>
                <h1>Bible College</h1>
              </Link>
            </div>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <DesktopNavigation navItems={navItems} />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <MobileNavigation navItems={navItems} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
