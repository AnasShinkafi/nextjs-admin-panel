"use client";
import { useState } from "react";
import { BsChevronExpand } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const cities = ["Shinkafi", "Abuja", "Kaduna", "Kano", "Yola"];

const CustomSelectBox = () => {
  const [selectedCity, setSelectedCity] = useState("Shinkafi");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" bg-gray-100 flex flex-col justify-center items-center w-fit relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className=" flex flex-row justify-between items-center bg-white w-48 my-2 p-2 rounded-lg cursor-pointer"
        >
          <span className="">{selectedCity}</span>
          <BsChevronExpand className=" text-gray-400" />
        </div>
        <div
          className={` flex flex-col bg-white w-48 my-2 rounded-lg ${
            open ? "opacity-100 h-auto" : " opacity-0 h-0"
          } transition-all duration-200 overflow-hidden absolute top-16 left-0`}
        >
          {cities.map((item) => (
            <div
              className={`flex justify-start items-center gap-x-2 px-2 py-1 hover:bg-orange-100 cursor-pointer ${
                selectedCity === item ? " bg-orange-100" : ""
              }`}
              key={item}
              onClick={() => {
                setSelectedCity(item);
                setOpen(false);
              }}
            >
              <AiOutlineCheck
                className={` text-orange-400 ${
                  selectedCity === item ? " opacity-100" : " opacity-0"
                }`}
              />
              <span className="">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div onClick={() => setOpen(false)} className={` bg-gray-100 fixed inset-0 opacity-50 z-0 ${open ? " block" : "hidden" }`}></div>
    </>
  );
};

export default CustomSelectBox;
