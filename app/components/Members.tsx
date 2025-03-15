"use client";
import React, { useEffect, useState } from "react";
import getMembers from "../Services/membersAPI";
import Card from "./Card";
import { usePathname } from "next/navigation";
export default function Members() {
  const pathname = usePathname();

  const [cards, setCards] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data = await getMembers();

  //       setCards(data); // Ensure it's always an array
  //     } catch (error) {
  //       console.error("Error fetching members:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMembers();

        // Ensure `data` is always an array
        setCards(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching members:", error);
        setCards([]); // Set empty array on error
      }
    }

    fetchData();
  }, []);

  // Split the first 3 cards
  const firstRow = cards.slice(0, 3);
  // Get the remaining cards after the first 3
  const remainingRows = cards.slice(3);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-12 mx-auto">
        {firstRow.map((card) => (
          <Card
            key={card.id}
            gender={card.Gender}
            name={card.full_Name}
            position={card.Position}
            committee={card.Committee}
          />
        ))}
      </div>

      {/* Remaining rows with 5 cards per row */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
        {remainingRows.map((card) => (
          <Card
            key={card.id}
            gender={card.Gender}
            name={card.full_Name}
            position={card.Position}
            committee={card.Committee}
          />
        ))}
      </div>
    </>
  );
}
