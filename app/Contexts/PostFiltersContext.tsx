"use client";

import React, { createContext, useContext, useState } from "react";

// Define the type for the context state
interface FiltersContextType {
  activeFilter: number | null;
  setActiveFilter: (id: number | null) => void;
}

// Create the context with default values
const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

// Provider component
export const FiltersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeFilter, setActiveFilter] = useState<number | null>(1);

  return (
    <FiltersContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </FiltersContext.Provider>
  );
};

// Custom hook to use the context
export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
};
