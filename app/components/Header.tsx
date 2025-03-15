"use client";
import SectionTitle from "./SectionTitle";
import ethmarlogoS from "../Assets/ethmarlogoS.svg";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between w-full px-6 md:px-14 py-4">
        {/* Navigation Links (Hidden on Small Screens) */}
        <div className="hidden lg:flex md:hidden sm:hidden flex-row-reverse items-center justify-evenly w-[80%]">
          <SectionTitle title="الرئيسية" path="/" />
          <SectionTitle title="النشرات المالية" path="/Pages/blog" />
          <SectionTitle title="شركاء النجاح" path="/Pages/partners" />
          <SectionTitle title="الهيكلة" path="/Pages/structure" />
        </div>

        {/* Hamburger Menu (Shown on Small Screens) */}
        <div className="lg:hidden md:block sm:block">
          <button
            className="text-7xl focus:outline-none text-white"
            onClick={() => {
              setOpen(!open);
            }}
          >
            ☰
          </button>
        </div>
        {/* Logo */}
        <Link href="/">
          <img
            src={ethmarlogoS.src}
            className="w-[180px] md:w-[220px] h-auto "
            alt="Ethmar Logo"
            width={220}
            height={150}
          />
        </Link>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {open && (
        <div className="flex flex-col text-center space-y-4 lg:hidden bg-white w-full py-4 shadow-md">
          <Link href="/" className="text-black w-full mx-auto">
            الرئيسية
          </Link>
          <Link href="/Pages/blog" className="text-black w-full mx-auto">
            النشرات المالية
          </Link>
          <Link href="/Pages/partners" className="text-black w-full mx-auto">
            شركاء النجاح
          </Link>
          <Link href="/Pages/structure" className="text-black w-full ml-auto">
            الهيكلة
          </Link>
        </div>
      )}
    </>
  );
}
