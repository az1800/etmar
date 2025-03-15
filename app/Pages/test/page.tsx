"use client";
import React, { useEffect, useState } from "react";
import getMembers from "../../../Services/membersAPI"; // Remove `{}` from the import
import Loader from "@/components/Loader";

export default function Page() {
  const [members, setMembers] = useState([]);

  return (
    <>
      <Loader />
    </>
  );
}
