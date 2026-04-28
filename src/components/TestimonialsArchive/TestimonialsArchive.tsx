import React, { useState } from "react";
import manImg from "@/assets/manImg.webp"; // 👈 Import your image here

const categories = [
  "All",
  "Accounting",
  "Digital Marketing",
  "Designing",
  "Content Writing",
  "Legal",
  "HR",
];

const testimonials = [
  { id: 1, name: "Alex Cooper", role: "Accounting Expert", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", category: "Accounting", rating: 5 },
  { id: 2, name: "Salima Nini", role: "Marketing Lead", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", category: "Digital Marketing", rating: 5 },
  { id: 3, name: "Peter England", role: "Legal Manager", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", category: "Legal", rating: 5 },
  { id: 4, name: "Nathan Hunt", role: "Recruitment Specialist", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", category: "HR", rating: 5 },
  { id: 5, name: "Dillon Jimmy", role: "Content Writer", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", category: "Content Writing", rating: 5 },
  { id: 6, name: "Mari Jo Hamejd", role: "UI/UX Designer", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", category: "Designing", rating: 5 },
  { id: 7, name: "Nimisha Sam", role: "HR Specialist", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", category: "HR", rating: 5 },
  { id: 8, name: "Alex Cooper", role: "Designing Expert", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", category: "Designing", rating: 5 },
  { id: 9, name: "Salima Nini", role: "Marketing Manager", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", category: "Digital Marketing", rating: 5 },
];

const TestimonialArchive: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTestimonials =
    selectedCategory === "All"
      ? testimonials
      : testimonials.filter(
          (t) =>
            t.category.toLowerCase().trim() ===
            selectedCategory.toLowerCase().trim()
        );

  return (
    <section className="bg-black py-16 px-4 sm:px-6 font-poppins">
      <div className="max-w-6xl mx-auto">
        {/* Filter Bar Wrapper */}
        <div className="flex justify-center mb-12">
          {/* Scrollable on mobile */}
          <div className="inline-flex overflow-x-auto no-scrollbar border border-gray-500 rounded-lg py-1 px-2 w-full sm:w-auto">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition
                  ${
                    selectedCategory === cat
                      ? "bg-white text-black rounded-md shadow-sm"
                      : "bg-black text-white hover:bg-white hover:text-black hover:rounded-md"
                  }
                  ${idx !== categories.length - 1 ? "border-r border-gray-600" : ""}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {filteredTestimonials.map((t, idx) => {
            // Add offset only for middle column on desktop
            const isMiddleCol = idx % 3 === 1;

            return (
              <div
                key={t.id}
                className={`h-full rounded-lg shadow-lg text-white bg-white/10 backdrop-blur-md
                            border border-white/10
                            ${isMiddleCol ? "md:mt-14" : ""}`} // offset only from md
              >
                <div className="flex h-full flex-col p-6">
                  {/* Stars */}
                  <div className="flex text-yellow-400 mb-3">
                    {"★".repeat(t.rating)}
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 text-sm mb-6">{t.text}</p>

                  {/* Profile */}
                  <div className="mt-auto flex items-center gap-3">
                    <img
                      src={manImg}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-gray-400 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialArchive;
