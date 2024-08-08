import React from "react";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer ">
          <span className="w-6 ">
            <IoHome />
          </span>
          <p className="font-bold ">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer ">
          <span className="w-6 ">
            <FaSearch />
          </span>
          <p className="font-bold ">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded ">
        <div className="p-4 flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <span className="w-8 "></span>
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3 ">
            <span className="w-5 ">+</span>
            <span className="w-5 ">+</span>
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Create your first playlist</h1>
            <p className="font-light">It is easy! we will help you.</p>
            <button className="px-4 py-1.5 bg-white test-[15px] text-black rounded-full mt-4">Create Playlist</button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
            <h1>Let's find some podcast to follow.</h1>
            <p className="font-light">We'll keep you updated on new episodes.</p>
            <button className="px-4 py-1.5 bg-white test-[15px] text-black rounded-full mt-4">Browse podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
