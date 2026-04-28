import Header from "../components/Header/Header";
import MediaKitFull from "../components/MediaKit/MediaKitFull";
import Cta from "../components/MediaKit/GetInTouchCTA";
import Footer from "../components/Footer/Footer";


const MediaKit = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
       <MediaKitFull />  
       <Cta />
      <Footer />
    </div>
  );
};

export default MediaKit;
