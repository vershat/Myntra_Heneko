import React from "react";
import Header from "./Header";

import Sidebar from "./SideBar";
import Widget from "./Widget";

const savedPosts = [
  { id: 1, title: "Post Title 1", content: "Drape Your Saree here how you can", imageUrl: "/path/to/image1.jpg" },
  { id: 2, title: "Post Title 2", content: "Match Yellow with gold", imageUrl: "/path/to/image2.jpg" },
  { id: 3, title: "Post Title 3", content: "Layering tips for a trendy winter look", imageUrl: "/path/to/image3.jpg" },
  { id: 4, title: "Post Title 4", content: "How to style oversized blazers effortlessly", imageUrl: "/path/to/image4.jpg" },
  { id: 5, title: "Post Title 5", content: "Perfect footwear to complement your outfit", imageUrl: "/path/to/image5.jpg" },
  { id: 6, title: "Post Title 6", content: "Accessorizing basics: Minimal vs. Statement", imageUrl: "/path/to/image6.jpg" },
  { id: 7, title: "Post Title 7", content: "Choosing the right handbag for every occasion", imageUrl: "/path/to/image7.jpg" },
  { id: 8, title: "Post Title 8", content: "Monochrome outfit ideas for an elegant look", imageUrl: "/path/to/image8.jpg" },
  { id: 9, title: "Post Title 9", content: "Mixing patterns like a pro – Dos and Don'ts", imageUrl: "/path/to/image9.jpg" },
  { id: 10, title: "Post Title 10", content: "Effortless ethnic fusion wear ideas", imageUrl: "/path/to/image10.jpg" },
];

const SavePos = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-gray-100 to-pink-300 pt-20 pb-10">
      <h1 className="text-center text-4xl font-bold mb-8">Saved Posts</h1>

      <div className="w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5">
        {savedPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 min-w-[220px]">
            <img src={post.imageUrl} alt={post.title} className="w-full h-44 object-cover" />
            <div className="p-3">
              <h2 className="text-lg font-bold mb-1">{post.title}</h2>
              <p className="text-gray-700 text-sm">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavePos;


