export default function BlogTypesSection() {
  const blogTypes = [
    "Product Blogs", "Guest Blogs", "Event Blogs",
    "Personal Blogs", "Business Blogs", "Niche Blogs",
    "Affiliate Blogs", "SEO Blogs", "News Blogs",
    "Review Blogs", "Travel Blogs", "Food Blogs"
  ];

  return (
    <section className="w-full bg-white font-poppins text-center py-10">
      {/* Heading */}
      <h2 className="text-2xl lg:text-3xl text-left font-semibold text-[#9E0000] mb-8">
        What Types Of Blogs Do We Write?
      </h2>

      {/* Grid of Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {blogTypes.map((type, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg py-3 px-5 text-sm font-medium text-gray-800 hover:bg-[#9E0000] hover:text-white cursor-pointer transition duration-300"
          >
            {type}
          </div>
        ))}
      </div>
    </section>
  );
}
