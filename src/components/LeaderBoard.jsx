import React from "react";
import Rank1 from "../assets/Rank1.svg";
import Rank2 from "../assets/Rank2.svg";
import Rank3 from "../assets/Rank3.svg";

const leaderboardData = [
  { rank: 1, name: "Kiara Advani", credits: 3000 },
  { rank: 2, name: "Mukesh Ambani", credits: 2980 },
  { rank: 3, name: "Urfi Javed", credits: 2900 },
  { rank: 4, name: "Kasish", credits: 2400 },
  { rank: 5, name: "Aditi", credits: 2200 },
  { rank: 6, name: "Rohit Sharma", credits: 2000 },
  { rank: 7, name: "Vansh", credits: 1800 },
  { rank: 8, name: "Justin", credits: 1000 },
  { rank: 9, name: "Shashi", credits: 1000 },
  { rank: 10, name: "Cutie++", credits: 800 },
];

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-200 p-8 pb-44">
      <h1 className="text-center text-5xl font-bold mb-8">Leaderboard</h1>

      <div className="flex justify-center space-x-4 mb-8">
        {[1, 0, 2].map((index) => (
          <div
            key={index}
            className="text-center shadow-2xl w-40 h-56 md:w-48 md:h-64"
          >
            <div className="bg-yellow-300 rounded-lg p-2">
              <div className="font-bold text-xl">Rank {leaderboardData[index].rank}</div>
              <img
                src={index === 0 ? Rank1 : index === 1 ? Rank2 : Rank3}
                className="w-20 h-20 mx-auto rounded-full my-2"
                alt={`Rank ${leaderboardData[index].rank}`}
              />
            </div>
            <div className="text-black">
              <div className="text-xl font-bold">{leaderboardData[index].name}</div>
              <div className="text-red-500 font-bold">
                Credits: {leaderboardData[index].credits}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-3/5 mx-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200 rounded-lg">
          <thead className="bg-gray-400">
            <tr>
              <th className="py-2 px-2 text-left text-sm">Rank</th>
              <th className="py-2 px-2 text-left text-sm">Name</th>
              <th className="py-2 px-2 text-left text-sm">Credits</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-400">
            {leaderboardData.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100 transition">
                <td className="py-2 px-2 text-left text-sm">Rank {user.rank}</td>
                <td className="py-2 px-2 text-left text-sm">{user.name}</td>
                <td className="py-2 px-2 text-left text-sm text-red-500">
                  Credits: {user.credits}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
