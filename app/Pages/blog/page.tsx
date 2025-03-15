// import HeroSection from "../../components/HeroSection";
// import Pagination from "../../components/Pagination";
// import Posts from "../../components/Posts";
// import image from "../../Assets/image copy.png";
// import Footer from "../../components/Footer";

// export default function Page() {
//   return (
//     <>
//       <HeroSection />
//       <Posts />
//       <Footer />
//     </>
//   );
// }
"use client";
import { Suspense } from "react";
import HeroSection from "../../components/HeroSection";
import Posts from "../../components/Posts";
import Footer from "../../components/Footer";

export default function Page() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div>Loading posts...</div>}>
        <Posts />
      </Suspense>
      <Footer />
    </>
  );
}
