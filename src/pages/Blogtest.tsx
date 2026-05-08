import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Linkedin, Send, Eye } from 'lucide-react'; 
import { FiChevronDown } from "react-icons/fi";
import BlogCta from "../components/Blogs/BlogCta"; 

// --- TYPES ---
interface Blog {
  title: string;
  content: string;
  featuredImage: string;
  slug: string;
  createdAt: string;
  author?: {
    name: string;
    image: string;
    link: string;
  };
  faqs?: { question: string; answer: string }[];
  styling?: {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
  };
  views?: number;
  metaTitle?: string;
  metaDescription?: string;
}

const RAW_URL = import.meta.env.VITE_API_URL || 'https://api.manhoursonhire.com';
const SERVER_URL = RAW_URL.replace(/\/+$/, '');

const StartupArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [viewCount, setViewCount] = useState<number>(0);

  // --- DATA FETCHING LOGIC ---
  useEffect(() => {
    const fetchBlogData = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const baseEndpoint = SERVER_URL.endsWith('/api') 
          ? `/blogs/slug/${slug}` 
          : `/api/blogs/slug/${slug}`;
        const fetchUrl = `${SERVER_URL}${baseEndpoint}`;

        const res = await axios.get<Blog>(fetchUrl);
        setBlog(res.data);
        setViewCount(res.data.views || 0);
        
        // Increment View Count
        const viewRes = await axios.patch(`${fetchUrl}/view`);
        setViewCount(viewRes.data.views);
      } catch (error) {
        console.error("Error fetching blog", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, [slug]);

  // --- SEO DYNAMIC UPDATES ---
  useEffect(() => {
    if (!blog) return;
    document.title = blog.metaTitle || blog.title || 'M.O.H Insights';
    return () => { document.title = 'Manners of Hustle'; };
  }, [blog]);

  if (loading) return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FFFAED]">
      <div className="w-10 h-10 border-4 border-[#F39200]/20 border-t-[#F39200] rounded-full animate-spin" />
    </div>
  );

  if (!blog) return (
    <div className="text-center py-20 bg-[#FFFAED] min-h-[50vh]">
      <h2 className="text-2xl mb-4 font-bold">Article not found.</h2>
      <a href="/blogs" className="text-[#F39200] underline">Back to Archive</a>
    </div>
  );

  // Dynamic Styling Destructuring
  const {
    fontFamily = "'Poppins', sans-serif",
    fontSize = "18px",
    lineHeight = "1.7",
    letterSpacing = "-0.01em"
  } = blog.styling || {};

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(blog.title);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#FFFAED] text-black py-16 px-6 relative z-10 font-sans w-full min-h-screen"
    >
      {/* Editorial Radial Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_#FCEDDB_0%,_#FFFAED_70%)] rounded-full blur-[120px] opacity-60"></div>
      </div>

      {/* Global Style Injection for Word-Break Fix & Dynamic Content styling */}
      <style>{`
        .single-blog-content { 
          font-family: ${fontFamily} !important; 
          line-height: ${lineHeight}; 
          letter-spacing: ${letterSpacing}; 
          color: #000000 !important; 
          text-align: left;
        }
        
        .single-blog-content p, 
        .single-blog-content li, 
        .single-blog-content span, 
        .single-blog-content div { 
          color: #000000 !important; 
          white-space: normal !important; 
          word-break: normal !important; 
          overflow-wrap: break-word !important; 
          hyphens: none !important; 
        }

        .single-blog-content h1, 
        .single-blog-content h2, 
        .single-blog-content h3 { 
          color: #F39200 !important; 
          font-weight: 900; 
          margin-top: 1.5em; 
          margin-bottom: 0.5em; 
          text-align: left;
        }
        
        .single-blog-content h1 { font-size: 2.5rem !important; }
        .single-blog-content h2 { font-size: 2rem !important; }
        .single-blog-content p { font-size: ${fontSize} !important; margin-bottom: 1.2em; }
        .single-blog-content strong { color: #000000 !important; font-weight: 700; }
        .single-blog-content ul { padding-left: 2rem !important; margin-bottom: 1.2em !important; list-style-type: disc !important; }
        .single-blog-content li { margin-bottom: 0.5em !important; }
        .single-blog-content img { border-radius: 1.5rem; margin: 1.5rem 0; max-width: 100%; display: block; border: 1px solid white; }
      `}</style>

      {/* --- MAIN GRID CONTAINER: 70/30 Split --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[70%_30%] gap-8 xl:gap-12 items-start relative w-full">
        
        {/* --- LEFT CONTENT COLUMN --- */}
        <div className="w-full min-w-0 pb-8 z-10">
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-black mb-8 leading-[1.15] text-[#F39200] tracking-tight text-left">
            {blog.title}
          </h1>

          {/* Dynamic Author Badge */}
          <div className="flex flex-wrap items-center gap-4 mb-12 text-neutral-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
            <div className="flex items-center gap-2">
              {blog.author?.image ? (
                <img src={blog.author.image} alt={blog.author.name} className="w-8 h-8 rounded-full object-cover border-2 border-[#F39200]/20" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#F39200]/10 flex items-center justify-center text-[#F39200] font-black text-sm border border-[#F39200]/20">
                  {blog.author?.name.charAt(0) || 'M'}
                </div>
              )}
              <span>By <strong className="text-black underline decoration-[#F39200]/30 underline-offset-4">{blog.author?.name || 'M.O.H Team'}</strong></span>
            </div>
            <span className="text-neutral-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#F39200] rounded-full shrink-0"></span>
              <span>{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently Published'}</span>
            </div>
          </div>

          <div className="single-blog-content w-full max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>

          {/* Dynamic FAQs Accordion */}
          {blog.faqs && blog.faqs.length > 0 && (
            <div className="pt-16 mt-8 border-t border-neutral-200">
              <h2 className="text-3xl md:text-5xl font-black text-[#F39200] mb-8 tracking-tighter">FAQs</h2>
              <div className="flex flex-col gap-4">
                {blog.faqs.map((faq, i) => (
                  <AccordionItem 
                    key={i} 
                    question={faq.question} 
                    answer={faq.answer} 
                    isOpen={openFaqIndex === i} 
                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* --- RIGHT SIDEBAR: STICKY --- */}
        <aside className="w-full min-w-0 shrink-0 sticky top-[100px] space-y-8 pb-10 z-20 md:pt-[50px]">
          
          <div className="flex items-center justify-start gap-3 px-4 mb-2">
             <Eye className="w-6 h-6 shrink-0 text-[#F39200]" />
             <span className="text-[#F39200] font-black text-xl tracking-tight whitespace-nowrap">Views: {viewCount}</span>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#F39200]/10 relative group border border-white max-w-full">
            <img 
              src={blog.featuredImage} 
              alt={blog.title} 
              className="w-full block h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>

          <div className="w-full min-w-0">
            <BlogCta serverUrl={SERVER_URL} />
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
             <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:-translate-y-1 transition-all">
               <Facebook size={22} fill="currentColor" />
             </a>
             <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-lg hover:-translate-y-1 transition-all">
               X
             </a>
             <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:-translate-y-1 transition-all">
               <Linkedin size={22} fill="currentColor" />
             </a>
             <a href={`https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:-translate-y-1 transition-all">
               <Send size={22} className="rotate-[-20deg]" />
             </a>
          </div>
        </aside>
      </div>

      {/* Dynamic Author Footer Section */}
      {blog.author && (
        <div className="w-full mt-20 pt-8 pb-8 border-t border-neutral-200/60 relative z-10 flex justify-center">
          <a href={blog.author.link || "#"} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-x-6 hover:opacity-80 transition-all group">
            <div className="relative shrink-0">
              {blog.author.image ? (
                <img src={blog.author.image} alt={blog.author.name} className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-white shadow-xl" />
              ) : (
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-200 border-2 border-white shadow-xl flex items-center justify-center text-2xl font-bold">{blog.author.name.charAt(0)}</div>
              )}
            </div>
            <div className="text-left flex flex-col gap-y-0.5">
              <h3 className="text-lg md:text-2xl font-bold text-neutral-800 tracking-tight leading-tight">About The Author</h3>
              <span className="text-base md:text-xl font-medium text-neutral-500">{blog.author.name}</span>
            </div>
          </a>
        </div>
      )}
    </motion.section>
  );
};

// --- FAQ ACCORDION COMPONENT ---
const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div layout className={`w-full bg-white/40 backdrop-blur-sm border rounded-[2rem] overflow-hidden transition-all duration-500 ${isOpen ? "border-[#F39200]/50 shadow-lg" : "border-neutral-200"}`}>
      <button onClick={onClick} className="w-full flex items-center justify-between p-7 text-left focus:outline-none">
        <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? "text-[#F39200]" : "text-black"}`}>{question}</span>
        <div className={`shrink-0 ml-4 w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${isOpen ? "bg-[#F39200] text-white rotate-180" : "bg-white text-neutral-400 border border-neutral-100"}`}>
          <FiChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }}>
            <div className="px-7 pb-7"><div className="pt-5 border-t border-neutral-100 text-neutral-600 leading-relaxed">{answer}</div></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StartupArticle;