import React, { useRef, useState } from "react";
import Header from "./Header";
import banner from "../utils/img/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { checkFormValidation } from "../utils/ckeckValidation";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const email = useRef();
  const password = useRef();
  const handleFormSubmit = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkFormValidation(
      email.current.value,
      password.current.value
    );
    setErrorMsg(message);
  };
  const toggleSignInSignUp = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
      <div className="absolute w-full h-full">
        <img className="h-[100vh]" src={banner} alt="banneer" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute mx-auto w-5/12 bg-black text-white right-0 left-0 my-24 p-12 bg-opacity-80 h-[600px] rounded-lg"
      >
        <h1 className="text-3xl text-bold pb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          className="p-4 my-2 rounded-sm w-full bg-gray-700 text-white bg-opacity-80"
          type="text"
          placeholder="Email or mobile number"
        />
        {!isSignIn && (
          <input
            className="p-4 my-2 rounded-sm w-full bg-gray-700 text-white bg-opacity-80"
            type="text"
            placeholder="full Name"
          />
        )}
        <input
          ref={password}
          className="p-4 my-2 rounded-sm w-full bg-gray-700 text-white bg-opacity-80"
          type="password"
          placeholder="Password"
        />
        <p className="text-red">{errorMsg}</p>
        <button
          className="bg-red-600 rounded-sm py-2 text-lg cursor-pointer my-2 w-full"
          onClick={handleFormSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className=" py-2 text-sm cursor-pointer my-2 w-full"
          onClick={toggleSignInSignUp}
        >
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already register? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
