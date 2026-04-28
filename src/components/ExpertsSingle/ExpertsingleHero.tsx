import React from "react";
import ExpertSideBar from "../../components/ExpertsSingle/ExpertsSingleSidebar";
import ExpertHeroLeft from "../../components/ExpertsSingle/ExpertsSingleLeft";
import Breadcrumbs from "../../components/Breadcrumbs";

const TaskPage: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-12 max-w-7xl mx-auto">
      {/* LEFT: Main Task Info */}
      <div className="w-full lg:w-[75%]">
        <Breadcrumbs />
        <ExpertHeroLeft />
      </div>

      {/* RIGHT: Sidebar (full width on mobile, sticky on desktop) */}
      <aside className="w-full lg:w-[25%] bg-black text-white shadow-lg rounded-2xl border border-gray-800 h-fit lg:sticky lg:top-10">
        <ExpertSideBar />
      </aside>
    </div>
  );
};

export default TaskPage;
