import "./App.css";
import AboutSection from "./Components/AboutSection";
import BottomSection from "./Components/BottomSection";
import Footer from "./Components/Footer";
import MYYHeader from "./Components/Header";
import PhotoSection from "./Components/PhotosSection";
import ReviewSection from "./Components/ReviewSection";
import RoutesRow from "./Components/RoutesRow";
import ServiceSection from "./Components/ServiceSection";
import StickyCard from "./Components/StickyCard";
import VenuSection from "./Components/VenuSection";

function App() {
  return (
    <div>
      <div
        style={{
          margin: "1rem 5rem 2rem 5rem",
        }}
      >
        <MYYHeader />
        <RoutesRow />
        <PhotoSection />
        <div className="flex mt-10">
          <div className="w-3/5 ">
            <ServiceSection />
            <ReviewSection />
            <AboutSection />
          </div>
          <StickyCard/>
        </div>
        <VenuSection />
        <BottomSection />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
