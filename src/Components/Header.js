import DropdownMenuButton from "./DropDownButton";
import Logo from "./Logo";
import { FaSistrix,FaMapMarkerAlt } from "react-icons/fa";

function MYYHeader(props) {
  return (
    <div className="flex justify-between content-center items-center">
      <Logo />
      <div className="flex flex-row rounded-full border pr-6 pl-3 py-2.5 items-center text- ">
      <FaSistrix size={21} className="mr-3"/>
      <input type="text" placeholder="Treatment or venue" className="mr-3 text-[#222727] placeholder-[#222727]"/>
      <hr style={{ height:20,width:0.4 ,backgroundColor:'grey'}} />
      <FaMapMarkerAlt size={21} className="mr-3 ml-4 " />
      <input type="text" placeholder="Current Location" className="mr-3 text-[#222727] placeholder-[#222727]"/>
      <button type=""></button>
      </div>
      <DropdownMenuButton/>
    </div>
  );
}

export default MYYHeader;
