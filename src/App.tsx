import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experts from "./pages/Experts";
import ExpertsSingle from "./pages/ExpertsSingle";
import ExpertsArchive from "./pages/ExpertsArchive";
import TestimonialsArchive from "./pages/TestimonialsArchive";
import MediaKit from "./pages/MediaKit";
import useUTMTracker from "./hooks/useUTMTracker";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import TermsOfUse from "./pages/TermsofUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookieSection from "./pages/CookiePolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Tasks from "./pages/Tasks";
import Tasked from "@/pages/Tasked";
import ProductPage from "@/pages/Productpage";
import BlogSingle from "./pages/BlogSingle";
import BlogArchive from "./pages/BlogArchive";
import ComingSoon from "./pages/ComingSoon";

function App() {
  useUTMTracker();

  return (
    <Router>
      <Routes>
         <Route path="/" element={<ComingSoon />} />
        <Route path="/blogs" element={<BlogArchive />} />
        <Route path="/blogs/:slug" element={<BlogSingle />} />
        <Route path="/home" element={<Tasked />} />
        <Route path="/MediaKit" element={<MediaKit />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/ProductPage" element={<ProductPage />} />


        {/* Services */}
        <Route path="/services/:service/:task" element={<Tasks />} />
        {/* Experts */}
        <Route path="/experts" element={<Experts />} />
        <Route path="/experts/single" element={<ExpertsSingle />} />
        <Route path="/ExpertsArchive" element={<ExpertsArchive />} />
        <Route
          path="/Experts/TestimonialsArchive"
          element={<TestimonialsArchive />}
        />

        {/* Legal */}
        <Route path="/TermsOfService" element={<TermsOfUse />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/CookieSection" element={<CookieSection />} />
        <Route path="/RefundPolicy" element={<RefundPolicy />} />


        {/* 404 (recommended) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
