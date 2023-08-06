import { FaPlus } from "react-icons/fa";
import HSlider from "./HSilder.js/HSlider";

function ServiceSection(params) {
  const services = [
    {
      id: 1,
      title: "Hollywood bikini (including perianal, navel)",
      time: "23",
      price: 150,
    },
    {
      id: 2,
      title: "Hollywood bikini (including perianal, navel)",
      time: "23",
      price: 150,
    },
    {
      id: 3,
      title: "Hollywood bikini (including perianal, navel)",
      time: "23",
      price: 150,
    },
    {
      id: 4,
      title: "Hollywood bikini (including perianal, navel)",
      time: "23",
      price: 150,
    },
    {
      id: 5,
      title: "Hollywood bikini (including perianal, navel)",
      time: "23",
      price: 150,
    },
  ];
  return (
    <div>
        <h1 className="text-3xl font-semibold">Services</h1>
        <HSlider />
        <div className="mt-8">
          {services.map((service, index) => {
            return (
              <div className="flex flex-row justify-between items-center border border-gray-200 rounded-md p-4 mt-2">
                <div flex flex-col>
                  <div className="font-semibold">{service.title}</div>
                  <div>{service.time}min</div>
                  <div className="font-semibold mt-6">£{service.price}</div>
                </div>
                <button className="mr-4 p-2 hover:bg-gray-200 rounded-md"><FaPlus/></button>
              </div>
            );
          })}
        </div>
        <button className="border rounded-md p-2 mt-4 text-[#222727] font-semibold px-4 text-lg">See all</button>
      
    </div>
  );
}
export default ServiceSection;
