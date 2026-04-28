import React, { useState, useRef, useEffect } from "react";
import {
  MdBlock,
  MdChecklist,
  MdNotes,
  MdOutlineAssignmentTurnedIn,
  MdPeople,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdAccessTime,
  MdContentCopy,
} from "react-icons/md";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import type { Offering } from "../types";
interface StickySidebarProps {
  task: Offering;
}

export default function StickySidebar({ task }: StickySidebarProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [heights, setHeights] = useState<number[]>([]);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pageUrl = window.location.href;

  useEffect(() => {
    const newHeights = contentRefs.current.map((ref) =>
      ref ? ref.scrollHeight : 0
    );
    setHeights(newHeights);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const shareLinks = {
    mail: `mailto:?subject=Check this out&body=${encodeURIComponent(pageUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(pageUrl)}`,
    slack: `https://slack.com/intl/en-in/share?text=${encodeURIComponent(
      pageUrl
    )}`,
  };

  const solutions = [
    task.inclusion && {
      title: "Inclusion",
      icon: <MdChecklist className="text-xl text-[#9E0000]" />,
      content: task.inclusion,
    },
    task.exclusion && {
      title: "Exclusion",
      icon: <MdBlock className="text-xl text-[#9E0000]" />,
      content: task.exclusion,
    },
    task.deliverables && {
      title: "Deliverables",
      icon: <MdOutlineAssignmentTurnedIn className="text-xl text-[#9E0000]" />,
      content: task.deliverables,
    },
    task.clientDependency && {
      title: "Client Dependency",
      icon: <MdPeople className="text-xl text-[#9E0000]" />,
      content: task.clientDependency,
    },
  ].filter(Boolean) as {
    title: string;
    icon: React.ReactNode;
    content: string;
  }[];

  // Utility: convert minutes → hh:mm
  const formatToHHMM = (minutes: number) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
  };

  const minHours = formatToHHMM(task.minItt);
  const maxHours = formatToHHMM(task.maxItt);

  return (
    <div className="w-full">
      <div className="bg-white border border-gray-200 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] p-7 space-y-8 w-full relative">
        {/* Title + Share Icons */}
        <div className="flex items-center justify-between border border-gray-100 rounded-md py-1 px-4">
          <h2 className="text-lg font-bold text-[#9E0000]">{task.tasktype}</h2>
          <div className="flex items-center gap-3 text-xl">
            <SiGmail
              className="cursor-pointer"
              color="#EA4335"
              onClick={() => window.open(shareLinks.mail, "_blank")}
            />
            <SiWhatsapp
              className="cursor-pointer"
              color="#25D366"
              onClick={() => window.open(shareLinks.whatsapp, "_blank")}
            />
            <FaSlack
              className="cursor-pointer"
              color="#611f69"
              onClick={() => window.open(shareLinks.slack, "_blank")}
            />
            <MdContentCopy
              className="cursor-pointer"
              onClick={copyToClipboard}
            />
            {copied && (
              <span className="ml-2 text-xs text-green-600">Copied!</span>
            )}
          </div>
        </div>

        {/* Start Task & Time Section */}
        <div className="flex items-center gap-4">
          <button className="flex-1 bg-gradient-to-r from-[#9E0000] to-[#d62828] hover:from-[#FFE819] hover:to-[#FFD700] hover:text-black text-white font-semibold py-3 rounded-md shadow-md flex items-center justify-center gap-2">
            <a href={`https://assign.manhoursonhire.com?utm_source=moh_website&utm_medium=start_task&utm_campaign=${encodeURIComponent(task.tasktype)}`} className="flex items-center justify-center gap-2">
              <MdAccessTime className="text-xl" /> <p>Start Task</p>
            </a>
          </button>


          <div className="grid grid-cols-2 gap-4 flex-1 text-center">
            <div className="bg-[#686868] rounded-md py-[6px]">
              <p className="text-[10px] font-bold text-white">{minHours} Hrs</p>
              <p className="text-[9px] text-white">Min ITT</p>
            </div>
            <div className="bg-[#686868] rounded-md py-[6px]">
              <p className="text-[10px] font-bold text-white">{maxHours} Hrs</p>
              <p className="text-[9px] text-white">Max ITT</p>
            </div>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="space-y-5">
          <h3 className="text-md font-semibold text-[#9E0000]">
            What Solutions Do You Have Access To?
          </h3>

          {solutions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-gray-200 pb-4"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(0)}
              >
                <div className="flex justify-between items-center w-full text-left cursor-pointer">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="font-medium text-[#9E0000]">{item.title}</span>
                  </div>
                  {isOpen ? (
                    <MdKeyboardArrowUp className="text-[#9E0000] text-xl" />
                  ) : (
                    <MdKeyboardArrowDown className="text-[#9E0000] text-xl" />
                  )}
                </div>

                <div
                  ref={(el) => {
                    contentRefs.current[index] = el ?? null;
                  }}
                  className="overflow-hidden transition-all duration-300 mt-3 text-sm text-gray-600"
                  style={{
                    height: isOpen ? `${heights[index] || 0}px` : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
