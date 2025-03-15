"use client"; // Needed in Next.js App Router
import Link from "next/link";
import { usePathname } from "next/navigation";

type SectionTitleProps = {
  title: string;
  path?: string; // Path for the section
};

export default function SectionTitle({ title, path }: SectionTitleProps) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link href={path || ""}>
      <div className="text-center">
        <h2
          className={`text-2xl font-bold relative inline-block ${
            isActive ? "text-white" : "text-gray-300"
          }`}
        >
          {title}
        </h2>
        {isActive && (
          <div className="w-full h-[2px] bg-white mt-1 mx-auto"></div>
        )}
      </div>
    </Link>
  );
}
