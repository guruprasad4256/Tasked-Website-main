import React, { useState } from "react";

const categories = [
  "All",
  "Content Marketing",
  "Content Writing",
  "Legal Services",
  "Recruitment",
  "Design Services",
  "Accounting",
];

const experts = [
  {
    id: "#A12345",
    color: "#28C76F", // green
    role: "Senior UI/UX Developer",
    exp: "6+ Years",
    rating: 4.8,
    category: "Design Services",
    image: "https://via.placeholder.com/400x400?text=John",
  },
  {
    id: "#B23456",
    color: "#EA5455", // red
    role: "Senior UI/UX Developer",
    exp: "9+ Years",
    rating: 4.6,
    category: "Content Writing",
    image: "https://via.placeholder.com/400x400?text=Jane",
  },
  {
    id: "#C34567",
    color: "#28C76F", // green
    role: "Senior UI/UX Developer",
    exp: "7+ Years",
    rating: 4.9,
    category: "Recruitment",
    image: "https://via.placeholder.com/400x400?text=Sarah",
  },
  {
    id: "#D45678",
    color: "#7367F0", // purple
    role: "Senior UI/UX Developer",
    exp: "7+ Years",
    rating: 4.8,
    category: "Legal Services",
    image: "https://via.placeholder.com/400x400?text=Emma",
  },
  {
    id: "#E56789",
    color: "#FF9F43", // orange
    role: "Senior UI/UX Developer",
    exp: "8+ Years",
    rating: 4.7,
    category: "Accounting",
    image: "https://via.placeholder.com/400x400?text=Michael",
  },
  {
    id: "#F67890",
    color: "#00CFE8", // cyan
    role: "Senior UI/UX Developer",
    exp: "7+ Years",
    rating: 4.5,
    category: "Content Marketing",
    image: "https://via.placeholder.com/400x400?text=David",
  },
];

const ExpertsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredExperts =
  selectedCategory === "All"
    ? experts
    : experts.filter(
        (exp) =>
          exp.category.toLowerCase().trim() ===
          selectedCategory.toLowerCase().trim()
      );


  return (
    <section className="bg-black py-16 px-6 font-poppins">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Our Top Experts, Handpicked For You
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. 
          Nunc suscipit, eros at blandit sollicitudin.
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-red-600 text-white"
                  : "bg-transparent border border-gray-600 text-white hover:bg-red-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredExperts.map((expert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg group relative"
            >
              {/* Image with hover background */}
              <div
                className="relative bg-black group-hover:[background-color:var(--expert-color)] transition-colors duration-300"
                style={{ ["--expert-color" as any]: expert.color }}
              >
                <img
  src={expert.image}
  alt={expert.id}
  className="w-full h-[250px] object-cover group-hover:opacity-80 transition"
/>

                {/* Rating Badge - Top Right */}
                <span className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-5 py-2 rounded shadow">
                  ⭐ {expert.rating}
                </span>
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: expert.color }}
                >
                  {expert.id}
                </p>
                <h3 className="text-lg font-semibold text-black">
                  {expert.role}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{expert.exp}</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12">
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-red-600 transition">
            View More Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
