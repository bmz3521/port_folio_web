"use client";

import Link from "next/link";
import DropdownlistMenu from "./DropdownlistMenu";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { Eye } from "lucide-react";

const Navbar = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const fetchVisits = async () => {
      const querySnapshot = await getDocs(collection(db, "visits"));
      setVisitCount(querySnapshot.size); // จำนวนเอกสารใน collection
    };

    fetchVisits();
  }, []);
  return (
    <nav>
      <div className="p-1 absolute right-0">
        <div className="flex flex-row">
          <p className="pr-2 sm:text-sm lg:text-lg">{visitCount}</p>
          <Eye className="m-auto icon" />
        </div>
      </div>
      <div
        className="
        container 
        flex 
        sm:flex-row
        justify-around
        items-center
        py-4
        sm:flex-row
        sm:items-center
        gap-4
        m-auto
        "
      >
        <Link
          href={"/"}
          className="
              text-4xl 
              font-extrabold 
              text-transparent 
              bg-gradient-to-r 
              from-blue-400 
              via-purple-500 
              to-pink-500 
              bg-clip-text 
              hover:animate-none 
              tracking-widest 
              italic
              "
        >
          MILO Anurak
          <p className="text-sm">Developer</p>
        </Link>
        <DropdownlistMenu />
      </div>
    </nav>
  );
};
export default Navbar;
