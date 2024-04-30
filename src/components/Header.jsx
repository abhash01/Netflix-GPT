import React from "react";
import logo from "../utils/img/Netflix_Logo_PMS.png";

const Header = ({ setIsSignIn, isSignIn }) => {
  const handleISignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="w-full bg-gradient-to-b from-black absolute text-white flex justify-between items-center bg-opacity-65 z-20">
      <img className="w-36 h-auto px-4 mx-4 my-4" src={logo} alt="logo" />
      <div className="mx-4 flex py-4 px-4 justify-around">
        <select className="bg-red-600 rounded-sm px-4 py-1 text-sm cursor-pointer">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <button
          onClick={handleISignIn}
          className="bg-red-600 rounded-sm px-4 py-1 text-sm cursor-pointer mx-4"
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Header;
