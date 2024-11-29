"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // ตรวจสอบ path ให้ถูกต้อง
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { DarkMode } from "./Darkmode";
import { link } from "@/utils/links";

const theme: string =
  "tracking-widest font-semibold text-lg  hover:text-pink-400 cursor-pointer transition ease-in-out duration-300";

const DropdownlistMenu = () => {
  return (
    <>
      <div className="sm:hidden">
        <DropdownMenu>
          {/* Trigger สำหรับแสดงเมนู */}
          <DropdownMenuTrigger asChild>
            <button className="focus:outline-none">
              <AlignJustify className="w-6 h-6 cursor-pointer" />
            </button>
          </DropdownMenuTrigger>

          {/* เนื้อหาของ Dropdown */}
          <DropdownMenuContent className="w-48">
            {link.map((item, index) => (
              <DropdownMenuItem key={item.href + index}>
                <Link href={item.href} className="w-full">
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
            <DarkMode />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-3 lg:space-x-8 items-center justify-center font-poppins hidden sm:block">
        {link.map((item, index) => (
          <Link key={item.href + index} href={item.href} className={theme}>
            {item.label}
          </Link>
        ))}
        <DarkMode />
      </div>
    </>
  );
};

export default DropdownlistMenu;
