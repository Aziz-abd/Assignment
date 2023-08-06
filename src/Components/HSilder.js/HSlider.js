import { useRef, useState } from "react";
import "./HSlide.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
function HSlider(params) {
  const targetRef1 = useRef(1);
  const targetRef2 = useRef(2);
  const [selectedItem, setselectedItem] = useState(0);

  const tabs = [
    "Featured",
    "JULY AND AGUST OFFERS",
    "Items",
    "Items",
    "Items",
    "Items",
    "Items",
    "Items",
    "Items",
    "Items",
    "Items",
    "Items",
    "Items",
    "Items",
    "Items",
  ];
  return (
    <div className="flex flex-row justify-center items-center content-center mt-6">
      <ul className="flex flex-row gap-7 overflow-y-auto overflow-hidden  ">
        {tabs.map((tab, index) => {
          return (
            <button onClick={() => setselectedItem(index)}>
              <li
                className={
                  index === selectedItem
                    ? "px-4 py-1 bg-[#222727] text-white rounded-full whitespace-nowrap font-bold"
                    : "px-4 py-1 text-[#222727] rounded-full  whitespace-nowrap font-bold hover:bg-gray-100"
                }
                ref={
                  index === 10 ? targetRef2 : index === 0 ? targetRef1 : null
                }
              >
                {tab}
              </li>
            </button>
          );
        })}
      </ul>
      <button
        className="ml-2 mr-2 hover:bg-gray-200 p-2 rounded-full"
        onClick={() => {
          targetRef1.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <FaAngleLeft />
      </button>
      <button
        className="hover:bg-gray-200  p-2 rounded-full"
        onClick={() => {
          targetRef2.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <FaAngleRight />
      </button>
    </div>
  );
}

export default HSlider;
