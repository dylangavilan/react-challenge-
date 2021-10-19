import React from "react";
import SearchBar from "../searchbar/SearchBar";
const NavBar = () => {
  return (
    <div className="flex justify-between min-w-screen bg-black	">
      <ul className="flex justify-center text-3xl text-white p-2 ">
        <li className="px-10 font-bold ">Home</li>
        <li className="px-10 font-bold">About</li>
      </ul>
    </div>
  );
};
export default NavBar;
