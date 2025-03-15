// "use client";
// import React, { useEffect, useState } from "react";
// import getMembers from "../Services/membersAPI";
// import Card from "./Card";
// import { usePathname } from "next/navigation";
// interface Member {
//   id: number;
//   full_Name: string;
//   Position: string;
//   Committee: string;
//   Gender: string;
// }

// export default function Members() {
//   const pathname = usePathname();

//   // const [cards, setCards] = useState([]);
//   const [cards, setCards] = useState<Member[]>([]);
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getMembers();

//         if (Array.isArray(data)) {
//           setCards(data as Member[]); // Explicitly cast to Member[]
//         } else {
//           setCards([]); // Set empty array if the response is not an array
//         }
//       } catch (error) {
//         console.error("Error fetching members:", error);
//         setCards([]); // Set empty array on error
//       }
//     }

//     fetchData();
//   }, []);

//   // Split the first 3 cards
//   const firstRow = cards.slice(0, 3);
//   // Get the remaining cards after the first 3
//   const remainingRows = cards.slice(3);

//   return (
//     <>
//       {/* <div className="w-fit mx-auto text-center">
//         <h1 className="text-black text-4xl mt-10 font-bold">هيكلة اثمار</h1>
//         <div className="h-[4px] bg-[#164B20] mt-1 w-full mx-auto" />
//       </div> */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-12 mx-auto">
//         {firstRow.map((card, index) => (
//           <Card
//             key={card.id}
//             gender={card.Gender}
//             name={card.full_Name}
//             position={card.Position}
//             committee={card.Committee}
//             className={
//               index === 0 ? "col-span-2 sm:col-span-2 md:col-span-1" : ""
//             }
//           />
//         ))}
//       </div>

//       {/* Remaining rows with 5 cards per row */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
//         {remainingRows.map((card) => (
//           <Card
//             key={card.id}
//             gender={card.Gender}
//             name={card.full_Name}
//             position={card.Position}
//             committee={card.Committee}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

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
  const [cards, setCards] = useState<Member[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMembers();

        if (Array.isArray(data)) {
          setCards(data as Member[]);
        } else {
          setCards([]);
        }
      } catch (error) {
        console.error("Error fetching members:", error);
        setCards([]);
      }
    }

    fetchData();
  }, []);

  // Extract the first 3 members from the entire dataset
  const firstThreeMembers = cards.slice(0, 3);
  const remainingMembers = cards.slice(3);

  // Group the remaining members by committee
  const committees = remainingMembers.reduce(
    (acc, member) => {
      if (!acc[member.Committee]) {
        acc[member.Committee] = [];
      }
      acc[member.Committee].push(member);
      return acc;
    },
    {} as Record<string, Member[]>
  );

  return (
    <>
      {/* 🔹 Title Section */}
      <div className="w-fit mx-auto text-center">
        <h1 className="text-black text-4xl mt-10 font-bold">هيكلة اثمار</h1>
        <div className="h-[4px] bg-[#164B20] mt-1 w-full mx-auto" />
      </div>

      {/* 🔹 First 3 Members - Special Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-12 mx-auto">
        {firstThreeMembers.map((member, index) => (
          <Card
            key={member.id}
            gender={member.Gender}
            name={member.full_Name}
            position={member.Position}
            committee={member.Committee}
            className={
              index === 0 ? "col-span-2 sm:col-span-2 md:col-span-1" : ""
            }
          />
        ))}
      </div>

      {/* 🔹 Render each committee with its members */}
      <div className="flex flex-col gap-10">
        {Object.entries(committees).map(([committeeName, members]) => (
          <div key={committeeName}>
            {/* Committee Name */}
            <div className="w-fit mx-auto text-center my-10">
              <h1 className="text-black text-4xl mt-10 font-bold">
                {committeeName}
              </h1>
              <div className="h-[4px] bg-[#164B20] mt-1 w-full mx-auto" />
            </div>

            {/* Members - Standard Grid */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-6 mx-auto`}
            >
              {members.map((member, index) => (
                <Card
                  key={member.id}
                  gender={member.Gender}
                  name={member.full_Name}
                  position={member.Position}
                  committee={member.Committee}
                  className={
                    index === 0 && members.length === 3
                      ? "md:col-start-2 lg:col-start-2" // Skip first place in mid/large screens
                      : ""
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
