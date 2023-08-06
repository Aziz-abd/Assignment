import { FaCcPaypal, FaCheck } from "react-icons/fa";

function AboutSection(params) {
  return (
    <div className="mt-12">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="mt-4 text-lg">
        Set in the heart of Soho, one of London’s most loved and cosmopolitan
        regions, Lia Aesthetics is the ideal location for your Aesthetic
        Treatments. Designed to be a wonderful, welcoming and warm setting, this
        clinic is easily accessible and we welcome you to visit.
      </p>
      <img
        src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMap-1.jpg"
        className="mt-12 rounded-lg"
        alt="as"
      />
      <div className="flex flex-row items-center">
        <p className="mt-2">UK, Cameo House, 11 Bear Street, London, England</p>
        <a href="asd" className="text-lg ml-2 text-indigo-600 mt-2">
          Read more
        </a>
      </div>

      <div className="grid grid-cols-2 gap-x-10 mt-8">
        <div className="">
          <h1 className="font-bold text-xl">Opening times</h1>
          <div className="flex justify-between items-center mt-4">
            <span>Monday</span> <span>Closed</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span>Tuesday</span> <span>10:00am - 8:00pm</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span>Wednesday</span> <span>Closed</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span>Thursday</span> <span>10:00am - 8:00pm</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span>Friday</span> <span>10:00am - 8:00pm</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span>Saturday</span> <span>10:00am - 8:00pm</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span>Saturday</span> <span>Closed</span>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold text-xl">Additional information</h1>
          <span className="flex flex-row mt-4 items-center ">
            <FaCheck/>
            <div className="ml-2">Instant Confirmation Pay by app</div>
           
          </span>
          <span className="flex flex-row mt-4 items-center ">
            <FaCcPaypal/>
            <div className="ml-2">Pay by app</div>
           
          </span>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
