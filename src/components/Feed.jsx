import React from "react";

const dummyPosts = [
  {
    id: 1,
    username: "Rasleen Kour",
    question: "Tommorow i am going to a wedding what should i wear?",
    details:
      "I have 4 options of Sareers which look should i carry?",
    image: "https://www.biba.in/on/demandware.static/-/Library-Sites-BibaSharedLibrary/default/dwf5668cf9/images/blog-image/blog_21jan_rb_1.jpg",
    upvotes: 2900,
    comments: 100,
    shares: 288,
  },
  {
    id: 2,
    username: "Wonder Watch",
    question: "I called the number written behind the train door, ‘Renu ji speaking’",
    details:
      "The reply came in a scared and timid voice, 'Yes, but who are you and where did you get my number from?'...",
    image: "https://via.placeholder.com/500x300",
    upvotes: 1500,
    comments: 80,
    shares: 220,
  },
];

const Feed = () => {
  return (
    <div className="space-y-4">
      {dummyPosts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">{post.username}</h2>
          <p className="text-lg font-bold mt-2">{post.question}</p>
          <p className="text-gray-700 mt-2">{post.details}</p>
          {post.image && <img src={post.image} alt="Post" className="w-full mt-3 rounded-lg" />}
          <div className="flex justify-between text-gray-600 mt-3 text-sm">
            <span>⬆ {post.upvotes} Upvotes</span>
            <span>💬 {post.comments} Comments</span>
            <span>🔄 {post.shares} Shares</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
