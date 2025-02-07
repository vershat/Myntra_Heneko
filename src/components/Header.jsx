import React from "react";
import { useNavigate } from "react-router-dom";
import mynlogo from "../assets/myn.png"; // Ensure the correct path

const Header = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex h-20 bg-white shadow-md px-4 items-center">
      {/* Logo Section (Clickable) */}
      <div className="w-1/6 flex justify-center cursor-pointer">
        <img className="h-8" src={mynlogo} alt="Logo" onClick={() => navigate("/")} />
      </div>

      {/* Navigation Links */}
      <div className="w-2/5 flex space-x-6">
        {["MEN", "WOMEN", "HOME & LIVING", "BEAUTY", "STUDIO", "FASHION FORUM"].map((item) => (
          <a key={item} className="font-bold text-sm cursor-pointer hover:text-pink-500 transition">
            {item}
          </a>
        ))}
      </div>

      {/* Search Bar */}
      <div className="w-1/3 flex items-center relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-4 w-4 h-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for products, brands, and more"
          className="w-full h-10 bg-gray-100 rounded pl-10 text-sm focus:bg-white focus:outline-none border-2 focus:border-pink-400"
        />
      </div>

      {/* Profile, Wishlist, Bag Icons */}
      <div className="w-1/6 flex justify-around">
        {[
          { label: "Profile", icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" },
          { label: "Wishlist", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" },
          { label: "Bag", icon: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-gray-700 hover:text-pink-500 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
            </svg>
            <p className="text-xs font-bold">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
