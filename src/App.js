import { useState } from "react";
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
  const [showBar, setshowBar] = useState(false);
  const [selected, setselected] = useState(0);

  function setfixed(params) {
    if (window.scrollY >= 800) {
      if (showBar !== true) {
        setshowBar(true);
      }
    } else if (window.scrollY < 800) {
      if (showBar !== false) {
        setshowBar(false);
      }
    }
  }
  window.addEventListener("scroll", setfixed);
  return (
    <div>
      {showBar && (
        <nav className=" sticky z-50 left-0 right-0 -mx-32 top-0 w-full h-15 bg-white shadow-md active:transition-all ease-in-out delay-700}">
          <div className=" flex flex-row items-center px-20 pt-6">
            <button
              className={
                selected === 0
                  ? "pb-4 border-b-2 border-[#222727] text-sm font-semibold"
                  : "pb-4 border-b-2 border-transparent text-sm font-semibold hover:border-gray-200"
              }
              onClick={() => setselected(0)}
            >
              Photos
            </button>

            <button
              className={
                selected === 1
                  ? "pb-4 border-b-2 border-[#222727] ml-8 text-sm font-semibold"
                  : "pb-4 ml-8 border-b-2 border-transparent text-sm font-semibold hover:border-gray-200"
              }
              onClick={() => setselected(1)}
            >
              Service
            </button>
            <button
              className={
                selected === 2
                  ? "pb-4 border-b-2 border-[#222727] ml-8 text-sm font-semibold"
                  : "pb-4 ml-8 border-b-2 border-transparent text-sm font-semibold hover:border-gray-200"
              }
              onClick={() => setselected(2)}
            >
              Reviews
            </button>
            <button
              className={
                selected === 3
                  ? "pb-4 border-b-2 border-[#222727] ml-8 text-sm font-semibold"
                  : "pb-4 ml-8 border-b-2 border-transparent text-sm font-semibold hover:border-gray-200"
              }
              onClick={() => setselected(3)}
            >
              About
            </button>
          </div>
        </nav>
      )}
      <div
        style={{
          margin: "1rem 4.8rem 2rem 4.8rem",
        }}
      >
        <MYYHeader />
        <RoutesRow />
        <PhotoSection />

        <div>
          <div className="flex mt-12">
            <div className="w-3/5 ">
              <ServiceSection />
              <ReviewSection />
              <AboutSection />
            </div>

            <StickyCard />
          </div>
        </div>

        <VenuSection />
        <BottomSection />
        <div className="mt-16"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
