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
  return (
    <div className="flex flex-col-reverse md:flex-row w-full md:w-[80%] gap-4 md:gap-8 items-center md:justify-end">
      <div className="flex flex-col text-center md:text-right w-[60%] md:w-[55%] gap-2">
        <p className="text-sm md:text-base">{post.Category}</p>
        <h1 className="text-xl sm:text-2xl font-bold">{post.Title}</h1>
        <p className="text-sm md:text-base">{post.Content}</p>
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
