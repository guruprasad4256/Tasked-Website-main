import BlogArchiveComponent from "../components/Blogs/BlogArchive";
import Header from "../components/Blogs/Header";

/**
 * BlogArchivePage 
 * Modern React/Vite does not require 'import React'.
 * Unused 'FloatingOrb' removed to pass strict TS build checks.
 */
const BlogArchivePage = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Header />
      <BlogArchiveComponent />
      
    </div>
  );
};

export default BlogArchivePage;