"use client";

import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribing email:", email);
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col max-w-[15rem] ml-auto p-4 bg-black text-white">
      {/* Title */}
      <h2 className="text-sm font-semibold mb-2 text-white text-right">
        اشترك في نشرتنا البريدية
      </h2>

      {/* Subscription form */}
      {!isSubscribed ? (
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-row  items-center bg-white rounded-md overflow-hidden">
            <button
              type="submit"
              className="bg-green-800 p-3 flex items-center justify-center rounded-l-md"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ادخل بريدك الالكتروني"
              className="w-full py-2 px-4 bg-transparent text-gray-700 text-[0.6rem] outline-none"
              required
              dir="rtl"
            />
          </div>
        </form>
      ) : (
        <div className="bg-green-800 text-white py-2 px-4 rounded-lg text-center text-sm">
          <p>شكراً لاشتراكك!</p>
        </div>
      )}
    </div>
  );
};

export default NewsletterSubscription;
