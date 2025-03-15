"use client";
import HeroSection from "../../components/HeroSection";
import Pagination from "../../components/Pagination";
import Posts from "../../components/Posts";
import image from "../../Assets/image copy.png";
import Footer from "../../components/Footer";

export default function Page() {
  // const posts = 20;
  // const currentPage = 2;
  // const itemsPerPage = 4;
  // // Pagination Logic
  // const totalPages = Math.ceil(posts / itemsPerPage);
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const paginatedPosts = posts.slice(startIndex, startIndex + itemsPerPage);
  return (
    <>
      <HeroSection />
      <Posts />
      {/* <Pagination primaryColor="#164B20" /> */}

      <Footer />
    </>
  );
}
