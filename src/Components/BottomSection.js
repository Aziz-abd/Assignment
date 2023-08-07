import { useState } from "react";

function BottomSection() {
  const [selected, setselected] = useState(0);
  return (
    <div className="mt-16 mb-10">
      <h1 className="text-3xl font-semibold">
        Treat yourself anytime, anywhere
      </h1>
      <div className="mt-8 flex flex-row items-center">
        <button
          className={
            selected === 0
              ? "pb-4 border-b-2 border-[#222727]"
              : "pb-4 border-b-2"
          }
          onClick={() => setselected(0)}
        >
          Other businesses in St James's
        </button>

        <button
          className={
            selected === 1
              ? "pb-4 border-b-2 border-[#222727] ml-8"
              : "pb-4 ml-8 border-b-2"
          }
          onClick={() => setselected(1)}
        >
          Other businesses around St James's
        </button>
      </div>
      <div className="grid grid-cols-5 gap-x-6">
        <div className="flex flex-col justify-start items-start content-start text-left mt-4">
          <button className="mt-3  text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
        </div>
        <div className="flex flex-col justify-start items-start content-start text-left mt-4">
          <button className="mt-3  text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
        </div>
        <div className="flex flex-col justify-start items-start content-start text-left mt-4">
          <button className="mt-3  text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
        </div>
        <div className="flex flex-col justify-start items-start content-start text-left mt-4">
          <button className="mt-3  text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
        </div>
        <div className="flex flex-col justify-start items-start content-start text-left mt-4">
          <button className="mt-3  text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
          <button className="mt-3 text-sm">Beauty Salon</button>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
