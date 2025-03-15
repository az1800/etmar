import Link from "next/link";
import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import NewsletterSubscription from "./NewsletterSubscription";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="flex flex-row justify-between mx-12">
        <div className="flex flex-row gap-1 items-center">
          <Link href="https://x.com/ethmar_spp?s=21">
            <button className="bg-white rounded-full flex items-center justify-center w-10 h-10 shadow-lg">
              <SiX size={24} className="text-green-800" />
            </button>
          </Link>
          <Link href="https://www.linkedin.com/in/ethmar-spp-971460288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <button className="bg-white rounded-full flex items-center justify-center w-10 h-10 shadow-lg">
              <FaLinkedin size={24} className="text-green-800" />
            </button>
          </Link>
          <Link href="https://www.instagram.com/ethmar_spp?igsh=MzRrc242enRsMnV4">
            <button className="bg-white rounded-full flex items-center justify-center w-10 h-10 shadow-lg">
              <FaInstagram size={24} className="text-green-800" />
            </button>
          </Link>
        </div>
        <NewsletterSubscription />
        {/* <div className="text-right">
          <p className="text-white">اشترك في نشرتنا البريدية</p>
          <input
            type="text"
            id=""
            placeholder="ادخل بريدك الالكتروني"
            className="bg-white text-right"
          />
          <button className="bg-green-800 text-white p-4 rounded-l-2xl flex items-center justify-center ">
            <FaArrowLeft size={24} />
          </button>
        </div> */}
      </div>
    </div>
  );
}
