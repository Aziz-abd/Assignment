import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
function StickyCard(params) {
  return (
    <div className="sticky right-0 top-20 border shadow-sm rounded-sm  w-full ml-24 h-min">
      <div className="border-b-2  p-6">
        <h1 className="text-3xl font-semibold">Lia Aesthetics</h1>
        <div className="flex flex-row items-center mt-2">
          <span className="text-lg font-semibold mr-2 ">5.0</span>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <a href="" className="text-indigo-600 ml-2 mr-2 text-lg">
            (14){" "}
          </a>
        </div>

        <button className="px-2 py-0 mt-4  border bg-green-200 text-green-800 rounded-sm ">
          Deals
        </button>
        <button className="w-full text-center py-2 bg-black rounded-lg mt-6 text-lg font-semibold text-white">
          Book Now
        </button>
      </div>
      <div className="border-b p-6">
        <div className="mt-6 flex flex-row items-center">
          <FaRegClock size={20}/>
          <span className="text-amber-700  mr-2 ml-2 text-base">
            Closed
          </span>{" "}
          <span className="mr-2 text-base">opens on Tuesday at 10:00am</span>
        </div>
        <div className="mt-6 flex flex-row items-start">
          <FaMapMarkerAlt size={20}/>{" "}
          <span className="mr-2 ml-2 text-base">
            UK, Cameo House, 11 Bear Street, London, England sdas asdasd
          </span>
        </div>
      </div>

      <div className="border-b p-6">
        <div className="mt-6 flex flex-row justify-between items-center">
          <div className="flex flex-col items-start">
            <span className="font-semibold ">Memberships</span>
            <span className=" text-gray-400">Buy a bundle of appointments.</span>
          </div>
          <button className="rounded-md border-2 px-3 py-1 text-sm">Buy</button>
        </div>
        <div className="mt-6 flex flex-row justify-between items-center">
          <div className="flex flex-col items-start">
            <span className="font-semibold ">Memberships</span>
            <span className=" text-gray-400">Buy a bundle of appointments.</span>
          </div>
          <button className="rounded-md border-2 px-3 py-1 text-sm">Buy</button>
        </div>
      </div>
    </div>
  );
}
function Star() {
  return (
    <div className="w-6 mr-0.5">
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
export default StickyCard;
