import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Linkedin, Send, Eye } from 'lucide-react'; 
import { FiChevronDown } from "react-icons/fi";
import BlogCta from "../Blogs/BlogCta";

import type { Blog as BaseBlog } from './BlogArchive';
import 'react-quill-new/dist/quill.snow.css'; 

interface Blog extends BaseBlog {
  slug: string; 
  author?: {
    name: string;
    image: string;
    link: string;
    description?: string;
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

const BlogSingle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [viewCount, setViewCount] = useState<number>(0);
  const hasIncrementedView = useRef(false);

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
        let blogData = res.data;

        if (blogData.author?.name && !blogData.author.description) {
          try {
            const authorsEndpoint = SERVER_URL.endsWith('/api') ? '/authors' : '/api/authors';
            const authorsRes = await axios.get(`${SERVER_URL}${authorsEndpoint}`);

            const matchedAuthor = authorsRes.data.find((author: any) => {
              const savedName = author.name?.trim().toLowerCase();
              const blogAuthorName = blogData.author?.name?.trim().toLowerCase();
              return savedName === blogAuthorName;
            });

            const authorDescription =
              matchedAuthor?.description ||
              matchedAuthor?.authorDescription ||
              matchedAuthor?.bio ||
              matchedAuthor?.about ||
              '';

            if (authorDescription) {
              blogData = {
                ...blogData,
                author: {
                  ...blogData.author,
                  description: authorDescription
                }
              };
            }
          } catch (authorError) {
            console.error("Error fetching author description", authorError);
          }
        }

        setBlog(blogData);
        
        if (!hasIncrementedView.current) {
          hasIncrementedView.current = true;
          const viewRes = await axios.patch(`${fetchUrl}/view`);
          setViewCount(viewRes.data.views);
        } else {
          setViewCount(blogData.views || 0);
        }
      } catch (error) {
        console.error("Error fetching blog", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogAndIncrementViews();
  }, [slug]);

  useEffect(() => {
    if (!blog) return;

    document.title = blog.metaTitle || blog.title || 'Tasked Insights';

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      'content', 
      blog.metaDescription || "Read our latest insights and expert perspectives."
    );

    return () => {
      document.title = 'Tasked'; 
    };
  }, [blog]);

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
      <a href="/blogs" className="text-[#F39200] underline hover:text-[#F39200]/80 transition-colors">
        Back to Archive
      </a>
    </div>
  );

  const {
    fontFamily = "'Poppins', sans-serif",
    fontSize = "18px",
    lineHeight = "1.7",
    letterSpacing = "-0.01em"
  } = blog.styling || {};

  const processContent = (html: string) => {
    return html
      .replace(/&nbsp;/g, ' ')
      .replace(/\u00A0/g, ' ');
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#FFFAED] text-black pt-28 pb-16 px-4 sm:px-6 relative z-10 font-poppins w-full max-w-full"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_#FCEDDB_0%,_#FFFAED_70%)] rounded-full blur-[120px] opacity-60"></div>
      </div>

      <style>{`
        .single-blog-content {
          width: 100%;
          max-width: 100%;
          min-width: 0;
        }

        .single-blog-content .ql-editor { 
          padding: 0 !important; 
          font-family: ${fontFamily} !important; 
          line-height: ${lineHeight}; 
          letter-spacing: ${letterSpacing}; 
          color: #000000 !important; 
          text-align: left !important;
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          overflow: visible !important;
        }

        .single-blog-content .ql-editor,
        .single-blog-content .ql-editor * {
          box-sizing: border-box !important;
        }

        .single-blog-content .ql-editor p,
        .single-blog-content .ql-editor li,
        .single-blog-content .ql-editor div,
        .single-blog-content .ql-editor span,
        .single-blog-content .ql-editor strong,
        .single-blog-content .ql-editor em,
        .single-blog-content .ql-editor b,
        .single-blog-content .ql-editor i {
          color: #000000 !important;
          white-space: normal !important;
          word-break: normal !important;
          overflow-wrap: normal !important;
          word-wrap: normal !important;
          hyphens: none !important;
          max-width: 100% !important;
        }

        .single-blog-content .ql-editor .ql-align-justify,
        .single-blog-content .ql-editor [style*="text-align: justify"] {
          text-align: left !important;
        }

        .single-blog-content .ql-editor a {
          color: #F39200 !important;
          text-decoration: underline;
          word-break: break-word !important;
          overflow-wrap: anywhere !important;
          word-wrap: break-word !important;
        }

        .single-blog-content .ql-editor h1,
        .single-blog-content .ql-editor h2,
        .single-blog-content .ql-editor h3,
        .single-blog-content .ql-editor h4,
        .single-blog-content .ql-editor h5,
        .single-blog-content .ql-editor h6 {
          color: #F39200 !important;
          word-break: normal !important;
          overflow-wrap: normal !important;
          word-wrap: normal !important;
          hyphens: none !important;
        }

        .single-blog-content .ql-editor strong {
          font-weight: 700;
        }

        .single-blog-content .ql-editor ul,
        .single-blog-content .ql-editor ol {
          padding-left: 2rem !important;
          margin-bottom: 1.2em !important;
        }

        .single-blog-content .ql-editor ul li {
          list-style-type: disc !important;
          display: list-item !important;
          list-style-position: outside !important;
          padding-left: 0 !important;
          margin-bottom: 0.5em !important;
        }

        .single-blog-content .ql-editor ol li {
          list-style-type: decimal !important;
          display: list-item !important;
          list-style-position: outside !important;
          padding-left: 0 !important;
          margin-bottom: 0.5em !important;
        }

        .single-blog-content .ql-editor li::before {
          display: none !important;
        }

        .single-blog-content .ql-editor h1 {
          font-size: 2.5rem !important;
          font-weight: 900;
          margin-bottom: 0.5em;
          margin-top: 1.5em;
        }

        .single-blog-content .ql-editor h2 {
          font-size: 2rem !important;
          font-weight: 800;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
        }

        .single-blog-content .ql-editor h3 {
          font-size: 1.5rem !important;
          font-weight: 700;
          margin-top: 1.2em;
          margin-bottom: 0.5em;
        }

        .single-blog-content .ql-editor p {
          font-size: ${fontSize} !important;
          margin-bottom: 1.2em;
        }

        .single-blog-content .ql-editor img {
          border-radius: 1.5rem;
          margin: 1.5rem 0;
          box-shadow: 0 10px 40px rgba(243,146,0,0.1);
          max-width: 100%;
          height: auto;
          display: block;
          border: 1px solid white;
        }

        .single-blog-content .ql-editor blockquote {
          border-left: 4px solid #F39200;
          padding-left: 1.5rem;
          font-style: italic;
          margin: 1.5rem 0;
          color: #000000 !important;
          background: rgba(243,146,0,0.05);
          padding: 1rem 1.5rem;
          border-radius: 0 1.5rem 1.5rem 0;
          border: 1px solid rgba(0,0,0,0.05);
          border-left-width: 4px;
        }

        .single-blog-content .ql-editor table {
          border-collapse: collapse;
          width: 100%;
          margin: 24px 0;
          border: none !important;
          table-layout: auto !important;
        }

        .single-blog-content .ql-editor td,
        .single-blog-content .ql-editor th {
          border: 1px solid #e2e8f0 !important;
          padding: 12px;
          background: transparent !important;
          min-width: 50px;
          position: relative;
          color: #000 !important;
        }

        .single-blog-content .ql-editor tr:first-child td {
          background-color: #fafafa;
          font-weight: 700;
          color: #000 !important;
        }

        @media (max-width: 640px) {
          .single-blog-content .ql-editor h1 {
            font-size: 2rem !important;
          }

          .single-blog-content .ql-editor h2 {
            font-size: 1.65rem !important;
          }

          .single-blog-content .ql-editor h3 {
            font-size: 1.35rem !important;
          }

          .single-blog-content .ql-editor p {
            font-size: 16px !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-8 xl:gap-10 items-start relative w-full min-w-0">
        
        <main className="w-full xl:w-[calc(100%-400px)] xl:max-w-[calc(100%-400px)] min-w-0 pb-8 pr-0 z-10">
          
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-black mb-8 leading-[1.15] text-[#F39200] tracking-tight text-balance break-words max-w-full">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-12 text-neutral-500 font-bold uppercase tracking-widest text-[10px] md:text-xs max-w-full">
            {blog.author && (
              <div className="flex items-center gap-2 min-w-0 max-w-full">
                {blog.author.link ? (
                  <a 
                    href={blog.author.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity min-w-0 max-w-full"
                  >
                    <AuthorAvatar author={blog.author} />
                    <span className="min-w-0 max-w-full">
                      By <strong className="text-black underline decoration-[#F39200]/30 underline-offset-4">{blog.author.name}</strong>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-2 min-w-0 max-w-full">
                    <AuthorAvatar author={blog.author} />
                    <span className="min-w-0 max-w-full">
                      By <strong className="text-black">{blog.author.name}</strong>
                    </span>
                  </div>
                )}
              </div>
            )}
            
            {blog.author && <span className="text-neutral-300 hidden sm:inline">•</span>}
            
            <div className="flex items-center gap-2 min-w-0 max-w-full">
              <span className="w-1.5 h-1.5 bg-[#F39200] rounded-full shrink-0"></span>
              <span className="min-w-0 max-w-full">
                {blog.createdAt 
                  ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) 
                  : 'Recently Published'}
              </span>
            </div>
          </div>

          <div className="single-blog-content w-full max-w-full min-w-0">
            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: processContent(blog.content) }} />
          </div>

          {blog.faqs && blog.faqs.length > 0 && (
            <div className="pt-16 mt-8 border-t border-neutral-200 w-full max-w-full">
              <div className="mb-12">
                <h2 className="text-[32px] md:text-[52px] font-black text-[#F39200] leading-[1.3] tracking-tighter">
                  FAQ<span className="text-black">s</span>
                </h2>
              </div>

              <div className="flex flex-col gap-4 w-full max-w-full">
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
        </main>

        <aside className="w-full xl:w-[360px] xl:min-w-[360px] xl:max-w-[360px] shrink-0 xl:sticky xl:top-[120px] xl:self-start space-y-8 pb-10 z-20 md:pt-[50px]">
          
          <div className="flex items-center justify-start gap-3 px-4 mb-2 min-w-0 max-w-full">
            <Eye className="w-6 h-6 shrink-0 text-[#F39200]" />
            <span className="text-[#F39200] font-black text-xl tracking-tight whitespace-nowrap">
              Views: {viewCount}
            </span>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#F39200]/10 relative group border border-white max-w-full">
            <img 
              src={blog.featuredImage} 
              alt={blog.title} 
              className="w-full max-w-full block h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>

          <div className="fixed bottom-0 left-0 w-full max-w-full p-4 rounded-t-[2.5rem] bg-transparent z-50 flex justify-center xl:relative xl:bottom-auto xl:left-auto xl:p-0 xl:bg-transparent xl:z-10 xl:rounded-none">
            <div className="w-[85%] xl:w-full min-w-0 max-w-full">
              <BlogCta serverUrl={SERVER_URL} />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap max-w-full">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black border border-neutral-100 rounded-full flex items-center justify-center text-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all shrink-0">
              <Facebook size={22} fill="currentColor" />
            </a>

            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-black text-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all shrink-0">
              X
            </a>

            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black border border-neutral-100 rounded-full flex items-center justify-center text-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all shrink-0">
              <Linkedin size={22} fill="currentColor" />
            </a>

            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black border border-neutral-100 rounded-full flex items-center justify-center text-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all shrink-0">
              <Send size={22} fill="currentColor" className="rotate-[-20deg]" />
            </a>
          </div>
        </aside>
      </div>

      {blog.author && (
        <div className="w-full max-w-full mt-12 pt-8 pb-8 border-t border-neutral-200/60 relative z-10 bg-[#FFFAED] flex justify-center">
          <a 
            href={blog.author.link || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-row items-center justify-center gap-x-6 hover:opacity-80 transition-all group no-underline max-w-full"
          >
            <div className="relative shrink-0">
              <img 
                src={blog.author.image || "https://via.placeholder.com/150"} 
                alt={blog.author.name} 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-white shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <div className="text-left flex flex-col gap-y-0.5 min-w-0 max-w-xl">
              <h3 className="text-lg md:text-2xl font-bold text-neutral-800 tracking-tight leading-tight">
                About The Author
              </h3>
              <span className="text-base md:text-xl font-medium text-neutral-500">
                {blog.author.name}
              </span>
              {blog.author.description && (
                <p className="text-sm md:text-base text-neutral-500 leading-relaxed mt-2">
                  {blog.author.description}
                </p>
              )}
            </div>
          </a>
        </div>
      )}
    </motion.section>
  );
};

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div 
      layout
      className={`group w-full max-w-full min-w-0 bg-white/40 backdrop-blur-sm border rounded-[2rem] overflow-hidden transition-all duration-500 ${
        isOpen 
        ? "border-[#F39200]/50 shadow-[0_20px_40px_-15px_rgba(243,146,0,0.1)]" 
        : "border-neutral-200 hover:border-[#F39200]/30 shadow-sm"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full max-w-full min-w-0 flex items-center justify-between p-7 text-left focus:outline-none"
      >
        <span className={`min-w-0 max-w-full text-base md:text-lg font-bold transition-colors duration-300 ${isOpen ? "text-[#F39200]" : "text-black"}`}>
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
            <div className="px-7 pb-7 max-w-full">
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

const AuthorAvatar = ({ author }: { author: { name: string; image: string } }) => {
  if (author.image) {
    return (
      <img 
        src={author.image} 
        alt={author.name} 
        className="w-8 h-8 rounded-full object-cover border-2 border-[#F39200]/20 shrink-0"
      />
    );
  }

  return (
    <span className="w-8 h-8 rounded-full bg-[#F39200]/10 flex items-center justify-center text-[#F39200] font-black text-sm border border-[#F39200]/20 shrink-0">
      {author.name.charAt(0).toUpperCase()}
    </span>
  );
};

export default BlogSingle;