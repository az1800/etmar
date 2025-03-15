// "use client";

// import React, { createContext, useContext, useState } from "react";

// // Define the type for the context state
// interface FiltersContextType {
//   activeFilter: number | null;
//   setActiveFilter: (id: number | null) => void;
// }

// // Create the context with default values
// const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

// // Provider component
// export const FiltersProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   // const [activeFilter, setActiveFilter] = useState<number | null>(1);
//   const [activeFilter, setActiveFilter] = useState<number | null>(null);

//   return (
//     <FiltersContext.Provider value={{ activeFilter, setActiveFilter }}>
//       {children}
//     </FiltersContext.Provider>
//   );
// };

// // Custom hook to use the context
// export const useFilters = () => {
//   const context = useContext(FiltersContext);
//   if (!context) {
//     throw new Error("useFilters must be used within a FiltersProvider");
//   }
//   return context;
// };
"use client";
import { createContext, useContext, useState } from "react";

type PostFiltersContextType = {
  activeFilter: number | null;
  setActiveFilter: React.Dispatch<React.SetStateAction<number | null>>;
};

const PostFiltersContext = createContext<PostFiltersContextType | undefined>(
  undefined
);

export function PostFiltersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeFilter, setActiveFilter] = useState<number | null>(null);

  return (
    <PostFiltersContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </PostFiltersContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(PostFiltersContext);
  if (!context) {
    throw new Error("useFilters must be used within a PostFiltersProvider");
  }
  return context;
}
