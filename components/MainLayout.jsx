"use client";
import React, { useContext } from "react";
import MainHeader from "./layout/layout-sections/MainHeader";
import { MenuContext } from "@/context/MenuContext";
import MainSidebar from "./layout/layout-sections/MainSidebar";

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);

  return (
    <div className=" bg-green-200 min-h-screen">
        <MainSidebar />
      <div className={` ${open ? "max-lg:blur-xl" : " blur-0"}`}>
      <MainHeader />

        <main className="lg: ml-[280px]">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
