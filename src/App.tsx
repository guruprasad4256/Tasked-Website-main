import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useUTMTracker from "./hooks/useUTMTracker";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
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
      </Routes>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
