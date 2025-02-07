import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SavePos from "./components/SavePos";
import RewardsPage from "./components/RewardsPage";
import Leaderboard from "./components/LeaderBoard";
import HomePage from "./components/HomePage";
import MainLayout from "./components/MainLayout";



function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage/>} />
    //   </Routes>
    // </Router>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<HomePage />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="saved" element={<SavePos />} />
          <Route path="following" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
