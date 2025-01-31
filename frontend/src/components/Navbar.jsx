import { Link } from "react-router-dom";
import React from "react";

// import { IoMoon } from "react-icons/io5";
// import { LuSun } from "react-icons/lu";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbar w-full h-[15vh] bg-zinc-900 flex justify-between">
        <div>{<Link to="/" className="text-blue-600 text-[40px]">PRODUCT STORE</Link>}</div>
        <div>
          <Link className="text-green-500" to="/create"> <FaCartPlus size={30} /> </Link>
        </div>
      </div>
    </>
  )
};

export default Navbar;
