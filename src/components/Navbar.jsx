import { FaUser } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
import { RiSettings3Fill } from "react-icons/ri";

function Navbar() {
  return (
    <>
      <div className="nav flex items-center justify-between px-[100px] h-[60px] border-b-[1px] border-gray-800">
        <div className="logo">
          <h3 className="text-[25px] font-[700] sp-text cursor-pointer hover:opacity-70 transition">
            GenUI
          </h3>
        </div>
        <div className="icons flex items-center gap-[15px]">
          <div className="icon p-2 rounded-full hover:bg-gray-800 transition duration-200 text-gray-300 hover:text-yellow-400">
            <HiSun />
          </div>
          <div className="icon p-2 rounded-full hover:bg-gray-800 transition duration-200 text-gray-300 hover:text-white">
            <FaUser />
          </div>
          <div className="icon p-2 rounded-full hover:bg-gray-800 transition duration-200 text-gray-300 hover:rotate-90 hover:text-blue-400">
            <RiSettings3Fill />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
