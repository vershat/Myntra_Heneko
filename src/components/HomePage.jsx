import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import profilePhoto from "../assets/ProfilePhoto.png";
import Feed from "./Feed";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 overflow-hidden">
      <main className="w-full max-w-2xl mx-auto h-full flex flex-col bg-white shadow-lg">
        <div className="p-4 border-b">
          <div className="flex items-center mb-4">
            <img src={profilePhoto} alt="Profile" className="w-12 h-12 rounded-full mr-3" />
            <input
              type="text"
              placeholder="What do you want to ask/share?"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
          <div className="flex space-x-4">
            <button 
              className="flex items-center px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="text-red-600 mr-2">?</span> Ask
            </button>  
            <button className="flex items-center px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              <span className="text-green-600 mr-2">✔</span> Answer
            </button>
            <button 
              className="flex items-center px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="text-red-600 mr-2">✏️</span> Post
            </button>  
          </div>
        </div>

        <div className="flex-grow overflow-y-auto">
          <Feed />
        </div>
      </main>

      {isModalOpen && (
        <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold mb-4">Ask a Question</h2>
            <input
              type="text"
              placeholder="Enter your question..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <ReactQuill value={answer} onChange={setAnswer} placeholder="Enter your answer (optional)" />
            <button
              className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              onClick={() => setIsModalOpen(false)}
            >
              Post Question
            </button>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default HomePage;
