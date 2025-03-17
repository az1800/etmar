import Image from "next/image";
import React from "react";
import Link from "next/link";
type PostProps = {
  Category: string;
  Title: string;
  Content: string;
  post_image: string;
  Post_Link: string;
};
export default function PostCards({ post }: { post: PostProps }) {
  // Function to remove HTML tags
  function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, ""); // Removes all HTML tags
  }

  // Function to truncate text to 30 words
  function truncateWords(text: string, wordLimit: number): string {
    const words = text.split(" ").slice(0, wordLimit);
    return words.join(" ") + (words.length >= wordLimit ? "..." : ""); // Add "..." if truncated
  }
  return (
    <div className="flex flex-col-reverse md:flex-row w-full md:w-[80%] gap-4 md:gap-8 items-center md:justify-end">
      <div className="flex flex-col text-center md:text-right w-[60%] md:w-[55%] gap-2">
        <p className="text-sm md:text-base" dir="rtl">
          {post.Category}
        </p>
        <h1 className="text-xl sm:text-2xl font-bold" dir="rtl">
          {post.Title}
        </h1>
        <p className="text-sm md:text-base" dir="rtl">
          {/* {post.Content}
           */}
          {truncateWords(stripHtml(post.Content), 30)}
        </p>
        <Link
          href={post.Post_Link}
          className="text-[#0000EE] text-sm md:text-base"
        >
          اقرأ المزيد
        </Link>
      </div>
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <img
          src={post.post_image}
          className="w-[16rem] h-[12rem] sm:w-[20rem] sm:h-[15rem] object-cover"
          alt={post.Title || "Post image"}
          height={200}
          width={250}
        />
      </div>
    </div>
  );
}
