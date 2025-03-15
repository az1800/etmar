"use client";
import React, { useEffect, useState } from "react";
import getMembers from "../Services/membersAPI";
import Card from "./Card";
import { usePathname } from "next/navigation";
interface Member {
  id: number;
  full_Name: string;
  Position: string;
  Committee: string;
  Gender: string;
}

export default function Members() {
  const pathname = usePathname();

  // const [cards, setCards] = useState([]);
  const [cards, setCards] = useState<Member[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMembers();

        if (Array.isArray(data)) {
          setCards(data as Member[]); // Explicitly cast to Member[]
        } else {
          setCards([]); // Set empty array if the response is not an array
        }
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
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-12 mx-auto">
        {firstRow.map((card) => (
          <Card
            key={card.id}
            gender={card.Gender}
            name={card.full_Name}
            position={card.Position}
            committee={card.Committee}
          />
        ))}
      </div> */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-12 mx-auto">
        {firstRow.map((card, index) => (
          <Card
            key={card.id}
            gender={card.Gender}
            name={card.full_Name}
            position={card.Position}
            committee={card.Committee}
            className={
              index === 0 ? "col-span-2 sm:col-span-2 md:col-span-1" : ""
            }
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
