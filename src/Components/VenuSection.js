import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function VenuSection(params) {
  return (
    <div className="mt-12 overflow-y-auto">
      <h1 className="text-3xl font-semibold">Venues nearby</h1>
      <CardSlider />
    </div>
  );
}
function CardSlider() {
  const targetRef1 = useRef();
  const targetRef2 = useRef();
  const [isVisible, setisVisible] = useState(false);

  const cards = [
    {
      id: 1,
      title: "AMA @ The Londoner",
      pic: "https://images.fresha.com/locations/location-profile-images/147870/593033/c333f2d2-5100-4724-9c5e-7d249338698c.jpg?class=venue-gallery-small",
      rating: 4.9,
      voting: 255,
      type: "Nail Salon",
    },
    {
      id: 2,
      title: "AMA @ The Londoner",
      pic: "https://images.fresha.com/locations/location-profile-images/147870/593033/c333f2d2-5100-4724-9c5e-7d249338698c.jpg?class=venue-gallery-small",
      rating: 4.9,
      voting: 255,
      type: "Nail Salon",
    },
    {
      id: 3,
      title: "AMA @ The Londoner",
      pic: "https://images.fresha.com/locations/location-profile-images/147870/593033/c333f2d2-5100-4724-9c5e-7d249338698c.jpg?class=venue-gallery-small",
      rating: 4.9,
      voting: 255,
      type: "Nail Salon",
    },
    {
      id: 4,
      title: "AMA @ The Londoner",
      pic: "https://images.fresha.com/locations/location-profile-images/147870/593033/c333f2d2-5100-4724-9c5e-7d249338698c.jpg?class=venue-gallery-small",
      rating: 4.9,
      voting: 255,
      type: "Nail Salon",
    },
    {
      id: 5,
      title: "AMA @ The Londoner",
      pic: "https://images.fresha.com/locations/location-profile-images/147870/593033/c333f2d2-5100-4724-9c5e-7d249338698c.jpg?class=venue-gallery-small",
      rating: 4.9,
      voting: 255,
      type: "Nail Salon",
    },
    {
      id: 6,
      title: "AMA @ The Londoner",
      pic: "https://images.fresha.com/locations/location-profile-images/147870/593033/c333f2d2-5100-4724-9c5e-7d249338698c.jpg?class=venue-gallery-small",
      rating: 4.9,
      voting: 255,
      type: "Nail Salon",
    },
    {
      id: 7,
      title: "AMA @ The Londoner",
      pic: "https://images.fresha.com/locations/location-profile-images/147870/593033/c333f2d2-5100-4724-9c5e-7d249338698c.jpg?class=venue-gallery-small",
      rating: 4.9,
      voting: 255,
      type: "Nail Salon",
    },
    {
      id: 8,
      title: "AMA @ The Londoner",
      pic: "https://images.fresha.com/locations/location-profile-images/147870/593033/c333f2d2-5100-4724-9c5e-7d249338698c.jpg?class=venue-gallery-small",
      rating: 4.9,
      voting: 255,
      type: "Nail Salon",
    },
    {
      id: 9,
      title: "AMA @ The Londoner",
      pic: "https://images.fresha.com/locations/location-profile-images/147870/593033/c333f2d2-5100-4724-9c5e-7d249338698c.jpg?class=venue-gallery-small",
      rating: 4.9,
      voting: 255,
      type: "Nail Salon",
    },
    {
      id: 10,
      title: "AMA @ The Londoner",
      pic: "https://images.fresha.com/locations/location-profile-images/147870/593033/c333f2d2-5100-4724-9c5e-7d249338698c.jpg?class=venue-gallery-small",
      rating: 4.9,
      voting: 255,
      type: "Nail Salon",
    },
    {
      id: 11,
      title: "AMA @ The Londoner",
      pic: "https://images.fresha.com/locations/location-profile-images/147870/593033/c333f2d2-5100-4724-9c5e-7d249338698c.jpg?class=venue-gallery-small",
      rating: 4.9,
      voting: 255,
      type: "Nail Salon",
    },
  ];
  return (
    <div className="relative overflow-visible ">
      <button
        className={
          isVisible
            ? "absolute bottom-32  -left-0 p-4 rounded-full bg-white border-2 border-gray-400 shadow-md overflow-visible"
            : "absolute bottom-32  -right-0 p-4 rounded-full bg-white border-2 border-gray-400 shadow-md overflow-visible"
        }
        onClick={() => {
          if (isVisible) {
            targetRef1.current.scrollIntoView({ behavior: "smooth" });
          } else {
            targetRef2.current.scrollIntoView({ behavior: "smooth" });
          }
          console.log(isVisible);
          setisVisible(!isVisible);
        }}
      >
        {" "}
        {isVisible ? <FaArrowLeft /> : <FaArrowRight />}
      </button>
      <ul className="flex flex-row gap-3 overflow-hidden mt-6 mr-4 ml-4 ">
        {cards.map((card, index) => {
          return (
            <li
              className="border border-gray-200 rounded-md w-96 shadow-lg hover:
               "
              ref={index === 7 ? targetRef2 : index === 0 ? targetRef1 : null}
            >
              <img
                src={card.pic}
                alt=""
                className=" rounded-t-lg max-w-fit  w-80 "
              />
              <div className="p-2">
                <h1 className="font-semibold ">{card.title}</h1>
                <div className="flex flex-row items-center content-end mt-2">
                  <h1 className="text-sm mr-1">{card.rating}</h1> <Star />
                  <h1 className="text-sm ml-1">({card.voting})</h1>
                </div>
                <div className=" text-sm text-gray-500">
                  The Londoner Hotel 38 Leicester Square....
                </div>
                <div className="border border-gray-200 text-sm text-gray-500 p2 w-20 align-middle text-center mt-2 rounded-sm">
                  {card.type}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
function Star(porps) {
  return (
    <div className="w-3.5 mr-0.6">
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
export default VenuSection;
