import React from "react";
import ProfileImage from "../assets/ProfilePhoto.png";

const RewardsPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-white to-yellow-100 px-32">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-between bg-yellow-300 p-4 rounded-lg shadow-md">
          <img className="w-10 h-10 rounded-full" src={ProfileImage} alt="Profile" />
          <div className="text-lg font-semibold text-gray-800">For You</div>
          <i className="fas fa-question text-gray-700 cursor-pointer"></i>
        </div>

        <div className="bg-pink-500 text-white text-center p-6 rounded-lg shadow-md mt-4">
          <div className="text-lg font-semibold">Available Points</div>
          <div className="text-3xl font-bold">12,043</div>
          <div className="text-sm">Equals <span className="font-bold">$144.21</span></div>
          <div className="w-full bg-pink-300 rounded-full h-3 mt-3">
            <div className="bg-yellow-400 h-full rounded-full" style={{ width: "60%" }}></div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <div className="bg-yellow-200 p-6 rounded-lg text-center shadow-md w-1/2 mx-1 cursor-pointer hover:bg-yellow-300 transition">
            <div className="text-2xl font-bold">$</div>
            <div className="text-lg font-semibold">Earn</div>
          </div>
          <div className="bg-yellow-200 p-6 rounded-lg text-center shadow-md w-1/2 mx-1 cursor-pointer hover:bg-yellow-300 transition">
            <div className="text-2xl">🎁</div>
            <div className="text-lg font-semibold">Redeem</div>
          </div>
        </div>

        <div className="bg-yellow-200 p-6 rounded-lg mt-6 shadow-md text-center">
          <div className="text-lg font-bold">Refer your Friends</div>
          <p className="text-gray-700 mt-2">You get a coupon voucher</p>
          <p className="text-gray-700">They get a free shipping coupon</p>
          <div className="text-xs text-gray-500 mt-2">** Terms & Conditions apply **</div>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
