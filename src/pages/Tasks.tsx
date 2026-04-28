import Header from "../components/Header/Header";
import FAQsHome from "../components/FAQsHome";
import GetInTouchCTA from "../components/GetInTouchCTA";
import TaskHerobg from "../components/TaskHerobg";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer/Footer";
import TaskHowItWorks from "../components/TaskHowItworks";
import RecommendedServices from "../components/RecommendedServices";
// import TaskHero from "../components/Taskhero";
import Logo from "@/assets/logo.png";

const Tasks = () => {
  return (
    <div>
      <Header />
      <TaskHerobg />
      {/* <TaskHero /> */}
      <TaskHowItWorks />
      <RecommendedServices />
      <GetInTouchCTA />
      <Testimonials />
      <FAQsHome />
      <Footer />
    </div>
  );
};

export default Tasks;