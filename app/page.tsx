// import Footer from "../components/Footer";
// import Header from "../components/Header";

// export default function Home() {
//   return (
//     <div className="bg-black min-h-screen flex flex-col">
//       <Header />
//       <div className="flex-1 bg-white"></div>
//       <Footer />
//       <h1>Hello world</h1>
//     </div>
//   );
// }
"use client"; // Ensure this runs only on the client

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use "next/navigation" in Next.js App Router (v13+)
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.push("/blog"); // Change to your desired route
    }
  }, [router]);

  return null; // Prevent rendering while redirecting
}
