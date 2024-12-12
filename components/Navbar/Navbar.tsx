"use client";

import Link from "next/link";
import DropdownlistMenu from "./DropdownlistMenu";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { Eye } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
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
          <p className="pr-2 md:text-base lg:text-lg">{visitCount}</p>
          <Eye className="m-auto icon mr-1" />
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
          <br/>
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1000,
              "Mobile Developer",
              1000,
              "Fullstack Developer",
              1000,
              "Frontend Developer",
              1000,
            ]}
            wrapper="p"
            speed={30}
            style={{ fontSize: "18px", lineHeight: "1.5"}}
            repeat={Infinity}
          />
        </Link>
        <DropdownlistMenu />
      </div>
    </nav>
  );
};
export default Navbar;
