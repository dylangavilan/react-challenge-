import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between min-w-screen bg-black	">
      <ul className="flex justify-center text-3xl text-white p-2 ">
        <li className="px-10 font-bold ">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
