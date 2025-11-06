import { FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-[#318130] p-4 shadow">
      
      {/* Search Bar */}
      <div className="flex px-2 rounded bg-[#eaf2ea] text-black items-center w-1/2">
      <AiOutlineSearch/>
        <input
          type="text"
          placeholder="Search"
          className="w-full border-none outline-none p-2"
        />
      </div>

      {/* Notification + Profile */}
      <div className="flex items-center gap-4">
        <button className="relative">
          <FiBell size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle size={28} />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
}
