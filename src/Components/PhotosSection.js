import { FaShareFromSquare, FaRegHeart } from "react-icons/fa6";
function PhotoSection(params) {
  return (
    <div className="mt-6">
      <h1 className="text-5xl font-bold">Lia Aesthetics</h1>
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-row items-center">
          <span className="text-lg font-semibold mr-2">5.0</span>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <a href="" className="text-indigo-600 ml-2 mr-2">
            (14){" "}
          </a>
          <span>•</span>
          <a className="text-green-600 ml-2 mr-2 font-semibold" href="">
            {" "}
            Open
          </a>{" "}
          <span className="mr-2 font-semibold">
            closes soon at 8:00pm • UK, Cameo House, 11 Bear Street, London
          </span>
          <a href="" className="text-indigo-600 font-semibold ">
            Get directions
          </a>
        </div>
        <div className="flex flex-row">
          <button className="p-3 rounded-full border mr-2 hover:bg-gray-200">
            <FaShareFromSquare size={20} />
          </button>
          <button className="p-3 rounded-full border  hover:bg-gray-200">
            <FaRegHeart size={20} />
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="grid grid-cols-3 grid-rows-2 mt-8  gap-x-6 gap-y-3">
          <img
            className="col-span-2 row-span-2  row-start-1 row-end-3 rounded-lg "
            src="https://images.fresha.com/locations/location-profile-images/843632/1035234/9deb56f9-f4d0-419c-ae2f-79fc6029d6bf.jpg?class=gallery-modal-large&dpr=2"
            alt="image1"
          />
          <img
            className="rounded-lg"
            src="https://images.fresha.com/locations/location-profile-images/843632/1035235/9026c867-4da5-41e6-8f6a-2aef9300e7fe.jpg?class=gallery-modal-large&dpr=2"
            alt="image1"
          />
          <img
            className="rounded-lg"
            src="https://images.fresha.com/locations/location-profile-images/843632/1035236/106898c2-966f-4ffb-833a-5c19003b9243.jpg?class=gallery-modal-large&dpr=2"
            alt="image1"
          />
        </div>
        <button className="absolute bottom-2 right-2 rounded-md px-2 py-2 border border-gray-300 bg-white hover:bg-gray-200 font-bold">
          See all images
        </button>
      </div>
    </div>
  );
}
function Star() {
  return (
    <div className="w-4 mr-0.5">
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="m21.975 9.974-4.225 3.69 1.266 5.495a1.502 1.502 0 0 1-1.395 1.84 1.499 1.499 0 0 1-.839-.214l-4.788-2.907-4.778 2.907a1.499 1.499 0 0 1-2.234-1.626l1.264-5.489L2.02 9.974a1.5 1.5 0 0 1 .853-2.63l5.571-.484 2.175-5.19a1.495 1.495 0 0 1 2.758 0l2.18 5.19 5.57.483a1.498 1.498 0 0 1 1.318 1.899 1.5 1.5 0 0 1-.465.732h-.005Z"></path>
      </svg>
    </div>
  );
}
export default PhotoSection;
