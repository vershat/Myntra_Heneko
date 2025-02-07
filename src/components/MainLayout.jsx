import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftSidebar from "./SideBar";
import RightSidebar from "./Widget";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
        <Header />
      </header>

      <div className="flex flex-1 pt-16">
        <aside className="w-1/4 h-full bg-gray-100 p-4">
          <LeftSidebar />
        </aside>

        <main className="flex-1 p-6 overflow-y-auto min-w-[50%] h-screen">
          <Outlet />
        </main>

        <aside className="w-1/4 h-full bg-gray-100 p-4">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
};

export default MainLayout;
