import React from "react";
import { Link } from "react-router-dom";
import RewardIcon from "../assets/Reward.png";
import LeaderIcon from "../assets/Leader.png";
import FollowingIcon from "../assets/Following.png";
import SavedIcon from "../assets/Saved.png";

const SideBar = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Menu</h2>
     
      <Link to="/leaderboard" className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-200 transition">
        <img src={LeaderIcon} alt="Leaderboard" className="w-8 h-8 mr-3" />
        <span className="text-gray-700 font-medium">Leaderboard</span>
      </Link>

      <Link to="/rewards" className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-200 transition">
        <img src={RewardIcon} alt="Rewards" className="w-8 h-8 mr-3" />
        <span className="text-gray-700 font-medium">Your Rewards</span>
      </Link>

      <Link to="/saved" className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-200 transition">
        <img src={SavedIcon} alt="Saved Post" className="w-8 h-8 mr-3" />
        <span className="text-gray-700 font-medium">Saved Post</span>
      </Link>

      <Link to="/following" className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-200 transition">
        <img src={FollowingIcon} alt="Following" className="w-8 h-8 mr-3" />
        <span className="text-gray-700 font-medium">Following</span>
      </Link>

    </div>
  );
};

export default SideBar;
