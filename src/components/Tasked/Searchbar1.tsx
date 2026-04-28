import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

type ServiceItem = {
  label: string;
  href: string;
};

const SERVICES: ServiceItem[] = [
  { label: "Accounting", href: "/services/Accounting" },
  { label: "Content Writing", href: "/services/Content%20Writing" },
  { label: "Design", href: "/services/Design" },
  { label: "Digital Marketing", href: "/services/Digital%20Marketing" },
  { label: "Legal", href: "/services/Legal" },
  { label: "Recruitment", href: "/services/Recruitment" },
];

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  // Typing animation state
  const [typingEnabled, setTypingEnabled] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = useMemo(() => SERVICES.map((s) => s.label), []);
  const currentWord = words[textIndex] ?? "";

  const filtered = useMemo(() => {
    const q = value.trim().toLowerCase();
    if (!q) return SERVICES;
    return SERVICES.filter((s) => s.label.toLowerCase().includes(q));
  }, [value]);

  const stopTyping = () => {
    setTypingEnabled(false);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const goTo = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filtered.length === 1) goTo(filtered[0].href);
    else setOpen(true);
  };

  // ✅ Typing loop (no synchronous setState inside the effect body)
  useEffect(() => {
    if (!typingEnabled || words.length === 0) return;

    // clear any previous timer before setting a new one
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    const atEnd = !isDeleting && charIndex === currentWord.length;
    const atStart = isDeleting && charIndex === 0;

    const delay = atEnd ? 900 : isDeleting ? 45 : 85;

    timerRef.current = window.setTimeout(() => {
      // When we finish typing a word, start deleting (after pause)
      if (atEnd) {
        setIsDeleting(true);
        return;
      }

      // When we finish deleting a word, move to next word and start typing
      if (atStart) {
        setIsDeleting(false);
        setTextIndex((i) => (i + 1) % words.length);
        // charIndex is already 0 here, so no need to set it.
        return;
      }

      // Otherwise, advance or delete one character
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, delay);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [typingEnabled, words.length, currentWord.length, charIndex, isDeleting]);

  // Close on outside click
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const typedWord = typingEnabled ? currentWord.slice(0, charIndex) : "";

  return (
    <div className="w-full flex justify-center">
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        {/* ✅ z-index 100 for Tasked hero */}
        <div ref={wrapperRef} className="relative w-full max-w-xl z-[100]">
          {/* Search pill */}
          <div
            className="
              flex items-center gap-3
              w-full h-12
              px-6
              rounded-full
              bg-white
              shadow-[0_10px_25px_rgba(0,0,0,0.08)]
            "
          >
            {/* Input + placeholder */}
            <div className="relative flex-1">
              <input
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setOpen(true);
                }}
                onFocus={() => {
                  stopTyping();
                  setOpen(true);
                }}
                onClick={() => {
                  stopTyping();
                  setOpen(true);
                }}
                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-[15px]
                  text-slate-700
                "
                aria-label="Search services"
              />

              {value.length === 0 && (
                <div
                  className="
                    pointer-events-none
                    absolute inset-y-0 left-0
                    flex items-center
                    text-[15px]
                  "
                  aria-hidden="true"
                >
                  <span className="text-slate-400">Search for&nbsp;</span>
                  <span className="text-slate-600 font-medium">
                    {typedWord || "Digital Marketing"}
                  </span>
                </div>
              )}
            </div>

            {/* Orange button */}
            <button
              type="submit"
              onClick={() => setOpen(true)}
              className="
                h-9 w-9
                rounded-full
                bg-orange-500
                hover:bg-orange-600
                active:scale-95
                transition
                flex items-center justify-center
                shadow-[0_6px_14px_rgba(249,115,22,0.35)]
              "
              aria-label="Search"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
          </div>

          {/* Dropdown */}
          {open && (
            <div
              className="
                absolute left-1/2 -translate-x-1/2 mt-2
                w-full max-w-[300px]
                rounded-2xl bg-white
                border border-slate-100
                shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                overflow-hidden
                z-[100]
              "
              role="listbox"
              aria-label="Services"
            >
              {filtered.length === 0 ? (
                <div className="px-4 py-3 text-sm text-slate-400">
                  No services found
                </div>
              ) : (
                filtered.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => goTo(item.href)}
                    className="
                      w-full text-left
                      px-4 py-3
                      text-[14px]
                      text-slate-700
                      hover:bg-orange-50
                      hover:text-slate-900
                      transition
                    "
                  >
                    {item.label}
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
