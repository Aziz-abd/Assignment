function StickyCard(params) {
  return (
    <div className="sticky right-0 top-0 border shadow-sm rounded-sm p-6 w-full ml-8 h-60">
      <h1 className="text-3xl font-semibold">Lia Aesthetics</h1>
      <div className="flex flex-row items-center mt-2">
        <span className="text-lg font-semibold mr-2">5.0</span>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <a href="" className="text-indigo-600 ml-2 mr-2">
          (14){" "}
        </a>
      </div>

      <button className="px-2 py-0 mt-4  border bg-green-200 text-green-800 rounded-sm ">Deals</button>
      <button className="w-full text-center py-2 bg-black rounded-lg mt-6 text-lg font-semibold text-white">Book Now</button>
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
export default StickyCard;
