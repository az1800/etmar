// "use client";
// import React, { useEffect, useState } from "react";
// import ethmarlogoP from "../Assets/ethmarlogoP.svg";
// import getPartners from "../Services/partnersAPI";
// import Card from "./Card";
// type Company = {
//   id: number;
//   Company_name: string;
//   imageLink: string;
// };
// export default function Companies() {
//   const [companies, setCompanies] = useState<Company[]>([]);
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await getPartners();
//         console.log("Fetched Companies Response:", response); // Debugging

//         // Ensure we extract the 'data' array from the response
//         const companyData = response.data || [];
//         setCompanies(Array.isArray(companyData) ? companyData : []);
//       } catch (error) {
//         console.error("Error fetching companies:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <>
//       {companies.map((company) => (
//         <Card
//           key={company.id}
//           name={company.Company_name}
//           imageLink={
//             "https://nqveldgyeonkhrsrsjbn.supabase.co/storage/v1/object/sign/companies/ethmarlogoP.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW5pZXMvZXRobWFybG9nb1Auc3ZnIiwiaWF0IjoxNzQxOTExMzA1LCJleHAiOjE3NDI1MTYxMDV9.gqgc-qqMJKxGypBFfLfBeAe311-2V3dArzaaapcFXeo"
//           }
//         />
//       ))}
//     </>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import ethmarlogoP from "../Assets/ethmarlogoP.svg";
import getPartners from "../Services/partnersAPI";
import Card from "./Card";

type Company = {
  id: number;
  Company_name: string;
  imageLink: string;
};

export default function Companies() {
  // Update the state type to Company[]
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPartners();
        console.log("Fetched Companies Response:", response);

        const companyData = response.data || [];
        // Type assertion to Company[] if you're confident about the data structure
        setCompanies(
          Array.isArray(companyData) ? (companyData as Company[]) : []
        );
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {companies.map((company) => (
        <Card
          key={company.id}
          name={company.Company_name}
          imageLink={company.imageLink || ethmarlogoP}
        />
      ))}
    </>
  );
}
