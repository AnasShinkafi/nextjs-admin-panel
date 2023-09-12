"use client";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useState } from "react";
import Link from "next/link";
import { BsGlobeAmericas } from "react-icons/bs";

const language = [
  { id: 1, flag: "fi fi-us", route: "/us" },
  { id: 2, flag: "fi fi-ng", route: "/ng" },
];

const Language = () => {

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 cursor-pointer"
        >
          <span className=" text-2xl">
            <BsGlobeAmericas />
          </span>
        </div>
        <div
          className={` flex flex-col bg-orange-200 w-16  rounded-lg ${
            open ? "opacity-100 h-auto" : " opacity-0 h-0"
          } transition-all duration-200 overflow-hidden absolute top-12 right-8`}
        >
          {language.map((item) => (
            <div
              className={`flex justify-center items-center p-2 hover:bg-orange-300 cursor-pointer`}
              key={item}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href={item.route} className="">
                <span className={item.flag}></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div onClick={() => setOpen(false)} className={` bg-gray-100 fixed inset-0 opacity-50 z-0 ${open ? " block" : "hidden" }`}></div>
    </>
  );
};

export default Language
;
