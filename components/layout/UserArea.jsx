"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const actions = [
  { id: 1, label: "User Dashboard", route: "/users/dashboard"},
  { id: 2, label: "Transactions", route: "/users/transactions"},
  { id: 3, label: "Orders", route: "/users/orders"},
  { id: 4, label: "Friends ", route: "/users/friends"},
  { id: 5, label: "Transactions", route: "/users/transactions"},
  { id: 6, label: "Log out", route: "/users/logout"},
];

const UserArea = () => {

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 cursor-pointer"
        > 
        {/* <Image src={'/anas.jpg'} alt="" width={50} height={50} className=" rounded-xl"/> */}
          
        </div>
        <div
          className={` flex flex-col bg-sky-200 w-40 my-2 rounded-lg ${
            open ? "opacity-100 h-auto" : " opacity-0 h-0"
          } transition-all duration-200 overflow-hidden absolute top-12 right-0`}
        >
          {actions.map((item) => (
            <div
              className={`flex justify-center items-center p-2 hover:bg-orange-300 cursor-pointer`}
              key={item}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href={item.route} className="">{item.label}</Link>
            </div>
          ))}
        </div>
      </div>
      <div onClick={() => setOpen(false)} className={` bg-gray-100 fixed inset-0 opacity-50 z-0 ${open ? " block" : "hidden" }`}></div>
    </>
  );
};

export default UserArea
;
