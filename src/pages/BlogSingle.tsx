import BlogSingleComponent from "../components/Blogs/BlogSingle";
import Header from "../components/Blogs/Header";
const BlogSinglePage = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Header />
      <BlogSingleComponent />
    </div>
  );
};

export default BlogSinglePage;