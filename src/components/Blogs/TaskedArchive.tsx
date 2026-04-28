import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export interface Blog {
  _id: string; title: string; slug: string; content: string; featuredImage: string;
  createdAt: string; categories?: string[]; tags?: string[];
}

const SERVICE_TAGS = ["All Services", "Accounting", "Content Writing", "Design", "Digital Marketing", "Legal", "Recruitment", "Development", "Virtual Assistant"];
const RAW_URL = import.meta.env.VITE_API_URL || 'https://api.manhoursonhire.com';
const SERVER_URL = RAW_URL.replace(/\/+$/, '');
const endpoint = SERVER_URL.endsWith('/api') ? '/blogs' : '/api/blogs';

const BlogArchive: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('All Services');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get<Blog[]>(`${SERVER_URL}${endpoint}?site=Tasked`);
        setBlogs(res.data);
      } catch (error) { console.error("Error", error); } finally { setLoading(false); }
    };
    fetchBlogs();
  }, []);

  const categoriesList = ['All', ...new Set(blogs.flatMap(blog => blog.categories || []))];
  const filteredBlogs = blogs.filter(blog => {
    const categoryMatch = selectedCategory === 'All' || blog.categories?.includes(selectedCategory);
    const tagMatch = selectedTag === 'All Services' || blog.tags?.includes(selectedTag);
    return categoryMatch && tagMatch;
  });

  if (loading) return <div className="flex justify-center items-center min-h-[50vh] text-white animate-pulse font-poppins">Loading Tasked Platform Blog...</div>;

  return (
    <section className="relative w-full bg-transparent font-poppins py-16 selection:bg-[#FFED00]/30 selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[#FFED00]/10 text-xs font-black uppercase text-[#FFED00] mb-5 border border-[#FFED00]/20 tracking-widest">Efficiency Blog</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">Tasked <span className="text-[#FFED00]">Updates.</span></h1>
        </header>

        {/* Service Filter */}
        <div className="flex items-center justify-center gap-2 mb-6 overflow-x-auto pb-2 hide-scrollbar">
          {SERVICE_TAGS.map((tag) => (
            <button key={tag} onClick={() => setSelectedTag(tag)} className={`px-5 py-1.5 rounded-full text-[11px] font-black uppercase transition-all border whitespace-nowrap ${selectedTag === tag ? "bg-[#FFED00] text-black border-[#FFED00]" : "bg-neutral-900/40 text-gray-400 border-neutral-800 hover:text-white"}`}>{tag}</button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-3 mb-16 overflow-x-auto pb-4 hide-scrollbar">
          {categoriesList.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-6 py-2 rounded-full text-sm font-bold transition-all border whitespace-nowrap ${selectedCategory === cat ? "bg-[#FFED00] text-black border-[#FFED00] shadow-lg shadow-[#FFED00]/20" : "bg-neutral-900/50 text-gray-300 border-neutral-700 hover:text-[#FFED00]"}`}>{cat}</button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <Link to={`/blogs/${blog.slug || blog._id}`} key={blog._id} className="group bg-neutral-900/40 border border-neutral-800 rounded-[2.5rem] overflow-hidden hover:border-[#FFED00]/50 transition-all flex flex-col">
              <div className="relative h-64 bg-neutral-950 flex items-center justify-center"><img src={blog.featuredImage} className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500" alt={blog.title} /></div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xs text-[#FFED00] font-black uppercase tracking-widest">{new Date(blog.createdAt).toLocaleDateString()}</p>
                  {blog.tags && <span className="text-[10px] bg-neutral-800 text-gray-400 px-2 py-0.5 rounded-md font-bold uppercase">{blog.tags[0]}</span>}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FFED00] transition-colors leading-snug line-clamp-2">{blog.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogArchive;