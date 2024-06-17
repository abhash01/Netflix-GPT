import React from "react";
import logo from "../utils/img/Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = ({ setIsSignIn, isSignIn }) => {
  const navigate = useNavigate();
  const handleISignOut = () => {
    //setIsSignIn(!isSignIn);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
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
          onClick={handleISignOut}
          className="bg-red-600 rounded-sm px-4 py-1 text-sm cursor-pointer mx-4"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
