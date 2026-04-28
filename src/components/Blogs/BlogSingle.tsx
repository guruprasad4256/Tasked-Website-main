import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Linkedin, Send, Eye } from 'lucide-react'; 
import { FiChevronDown } from "react-icons/fi";
import BlogCta from "../Blogs/BlogCta";

// Extending the imported Blog type to include the properties from the Editor
import type { Blog as BaseBlog } from './BlogArchive';
import 'react-quill-new/dist/quill.snow.css'; 

interface Blog extends BaseBlog {
  slug: string; 
  faqs?: { question: string; answer: string }[];
  styling?: {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
  };
  views?: number;
}

const RAW_URL = import.meta.env.VITE_API_URL || 'https://api.manhoursonhire.com';
const SERVER_URL = RAW_URL.replace(/\/+$/, '');

const BlogSingle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [viewCount, setViewCount] = useState<number>(0);

  useEffect(() => {
    const fetchBlogAndIncrementViews = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const baseEndpoint = SERVER_URL.endsWith('/api') 
          ? `/blogs/slug/${slug}` 
          : `/api/blogs/slug/${slug}`;
        const fetchUrl = `${SERVER_URL}${baseEndpoint}`;

        const res = await axios.get<Blog>(fetchUrl);
        setBlog(res.data);
        
        const viewRes = await axios.patch(`${fetchUrl}/view`);
        setViewCount(viewRes.data.views);
      } catch (error) {
        console.error("Error fetching blog", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogAndIncrementViews();
  }, [slug]);

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = blog ? encodeURIComponent(blog.title) : "";

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`
  };

  if (loading) return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FFFAED]">
      <div className="w-10 h-10 border-4 border-[#F39200]/20 border-t-[#F39200] rounded-full animate-spin" />
    </div>
  );

  if (!blog) return (
    <div className="text-center py-20 font-bold font-poppins text-black bg-[#FFFAED] min-h-[50vh]">
      <h2 className="text-2xl mb-4 text-black">Article not found.</h2>
      <a href="/blogs" className="text-[#F39200] underline hover:text-[#F39200]/80 transition-colors">Back to Archive</a>
    </div>
  );

  const {
    fontFamily = "'Poppins', sans-serif",
    fontSize = "18px",
    lineHeight = "1.7",
    letterSpacing = "-0.01em"
  } = blog.styling || {};

  const processContent = (html: string) => {
    return html; 
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // Removed overflow-hidden here to fix sticky sidebar
      className="bg-[#FFFAED] text-black py-16 px-6 relative z-10 font-poppins w-full"
    >
      {/* Editorial Radial Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_#FCEDDB_0%,_#FFFAED_70%)] rounded-full blur-[120px] opacity-60"></div>
      </div>

      <style>{`
        .single-blog-content .ql-editor { 
          padding: 0 !important; 
          font-family: ${fontFamily} !important; 
          line-height: ${lineHeight}; 
          letter-spacing: ${letterSpacing}; 
          color: #000000 !important; 
          overflow-y: visible;
          white-space: normal !important; 
          word-break: keep-all !important; 
          overflow-wrap: break-word !important;
          hyphens: none !important;
          text-align: left;
        }
        .single-blog-content .ql-editor p, 
        .single-blog-content .ql-editor li, 
        .single-blog-content .ql-editor span, 
        .single-blog-content .ql-editor div { 
          color: #000000 !important; 
          word-break: keep-all !important; 
          overflow-wrap: break-word !important;
        }
        .single-blog-content .ql-editor h1, 
        .single-blog-content .ql-editor h2, 
        .single-blog-content .ql-editor h3, 
        .single-blog-content .ql-editor h4, 
        .single-blog-content .ql-editor h5, 
        .single-blog-content .ql-editor h6 { color: #F39200 !important; }
        .single-blog-content .ql-editor a { color: #F39200 !important; text-decoration: underline; }
        .single-blog-content .ql-editor strong { color: #000000 !important; font-weight: 700; }
        .single-blog-content .ql-editor ul, .single-blog-content .ql-editor ol { padding-left: 2rem !important; margin-bottom: 1.2em !important; }
        .single-blog-content .ql-editor ul li { list-style-type: disc !important; display: list-item !important; list-style-position: outside !important; padding-left: 0 !important; margin-bottom: 0.5em !important; }
        .single-blog-content .ql-editor ol li { list-style-type: decimal !important; display: list-item !important; list-style-position: outside !important; padding-left: 0 !important; margin-bottom: 0.5em !important; }
        .single-blog-content .ql-editor li::before { display: none !important; }
        .single-blog-content .ql-editor h1 { font-size: 2.5rem !important; font-weight: 900; margin-bottom: 0.5em; margin-top: 1.5em; }
        .single-blog-content .ql-editor h2 { font-size: 2rem !important; font-weight: 800; margin-top: 1.5em; margin-bottom: 0.5em; }
        .single-blog-content .ql-editor h3 { font-size: 1.5rem !important; font-weight: 700; margin-top: 1.2em; margin-bottom: 0.5em; }
        .single-blog-content .ql-editor p { font-size: ${fontSize} !important; margin-bottom: 1.2em; }
        .single-blog-content .ql-editor img { border-radius: 1.5rem; margin: 1.5rem 0; box-shadow: 0 10px 40px rgba(243,146,0,0.1); max-width: 100%; display: block; border: 1px solid white; }
        .single-blog-content .ql-editor blockquote { border-left: 4px solid #F39200; padding-left: 1.5rem; font-style: italic; margin: 1.5rem 0; color: #000000 !important; background: rgba(243,146,0,0.05); padding: 1rem 1.5rem; border-radius: 0 1.5rem 1.5rem 0; border: 1px solid rgba(0,0,0,0.05); border-left-width: 4px; }
        .single-blog-content .ql-editor table { border-collapse: collapse; width: 100%; border: 1px solid #eee; margin: 24px 0; border-radius: 1rem; overflow: hidden; }
        .single-blog-content .ql-editor td, .single-blog-content .ql-editor th { border: 1px solid #eee; padding: 16px; background: #fff; min-width: 100px; color: #000 !important; }
        .single-blog-content .ql-editor tr:first-child td { background-color: #fafafa; font-weight: 700; color: #000 !important; }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-12 items-start relative">
        <div className="flex-1 min-w-0 w-full py-8 pr-8 pl-0 sm:py-12 sm:pr-12 sm:pl-0 md:py-20 md:pr-20 md:pl-0 z-10">
          {/* Title Color updated to #F39200 */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-12 leading-[1.1] text-[#F39200] tracking-tighter">
            {blog.title}
          </h1>

          <div className="single-blog-content w-full max-w-none">
            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: processContent(blog.content) }} />
          </div>

          {blog.faqs && blog.faqs.length > 0 && (
            <div className=" pt-16 border-t border-neutral-200">
                <div className="mb-12">
                <h2 className="text-[32px] md:text-[52px] font-black text-[#F39200] leading-[1.3] tracking-tighter">
                  FAQ<span className="text-black">s</span>
                </h2>
              </div>
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

        {/* Sidebar with working sticky logic */}
        <aside className="w-full xl:w-[320px] shrink-0 sticky top-[100px] space-y-8 pb-10 z-20 md:pt-[50px]">
          <div className="flex items-center justify-start gap-3 px-4 mb-2">
             <Eye className="w-6 h-6 text-[#F39200]" />
             <span className="text-[#F39200] font-black text-xl tracking-tight">Views: {viewCount}</span>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#F39200]/10 relative group border border-white">
            <img src={blog.featuredImage} alt={blog.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>

          <div className="fixed bottom-0 left-0 w-full p-4 rounded-t-[2.5rem] bg-transparent z-50 flex justify-center xl:relative xl:bottom-auto xl:left-auto xl:p-0 xl:bg-transparent xl:z-10 xl:rounded-none">
            <div className="w-[85%] xl:w-full">
              <BlogCta serverUrl={SERVER_URL} />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
             <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black border border-neutral-100 rounded-full flex items-center justify-center text-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
               <Facebook size={22} fill="currentColor" />
             </a>
             <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-black text-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
               X
             </a>
             <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black border border-neutral-100 rounded-full flex items-center justify-center text-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
               <Linkedin size={22} fill="currentColor" />
             </a>
             <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black border border-neutral-100 rounded-full flex items-center justify-center text-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
               <Send size={22} fill="currentColor" className="rotate-[-20deg]" />
             </a>
          </div>
        </aside>
      </div>
    </motion.section>
  );
};

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div 
      layout
      className={`group w-full bg-white/40 backdrop-blur-sm border rounded-[2rem] overflow-hidden transition-all duration-500 ${
        isOpen 
        ? "border-[#F39200]/50 shadow-[0_20px_40px_-15px_rgba(243,146,0,0.1)]" 
        : "border-neutral-200 hover:border-[#F39200]/30 shadow-sm"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-7 text-left focus:outline-none"
      >
        <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${isOpen ? "text-[#F39200]" : "text-black"}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${
          isOpen ? "bg-[#F39200] text-white rotate-180 shadow-lg shadow-[#F39200]/30" : "bg-white border border-neutral-100 text-neutral-400"
        }`}>
          <FiChevronDown size={20} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-7 pb-7">
              <div className="pt-5 border-t border-neutral-100 text-neutral-600 text-sm md:text-base leading-relaxed">
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogSingle;