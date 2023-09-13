"use client"
import { MenuContext } from "@/context/MenuContext";
import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import UserArea from "./UserArea";
import Language from "./Language";

const MainHeader = () => {
  const { toggle } = useContext(MenuContext);
  return (
    <div className=" bg-white flex justify-between items-center px-4 h-12 mb-4">
      <div className="">Brand</div>
     <div className=" flex justify-center items-center gap-5">
      <div className="">
        <Language />
      </div>
     <div className=" lg:hidden" onClick={toggle}>
        <FaBars className=" cursor-pointer" />
      </div>
      <div className="">
        <UserArea />
      </div>
     </div>
    </div>
  );
};

export default MainHeader;
