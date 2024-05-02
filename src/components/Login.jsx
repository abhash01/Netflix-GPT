import React, { useRef, useState } from "react";
import Header from "./Header";
import banner from "../utils/img/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import { checkFormValidation } from "../utils/ckeckValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleFormSubmit = () => {
    const message = checkFormValidation(
      email.current.value,
      password.current.value
    );
    setErrorMsg(message);
    if (message) return;
    if (!isSignIn) {
      //Sign Up
      //const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    }
  };
  const toggleSignInSignUp = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
      <div className="absolute w-full h-full">
        <img className="h-[100vh] w-full" src={banner} alt="banneer" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute mx-auto w-[450px] bg-black text-white right-0 left-0 my-24 p-12 bg-opacity-80 h-[600px] rounded-lg"
      >
        <h1 className="text-3xl text-bold pb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-2 rounded-sm w-full bg-gray-700 text-white bg-opacity-80"
            type="text"
            placeholder="full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-2 rounded-sm w-full bg-gray-700 text-white bg-opacity-80"
          type="text"
          placeholder="Email or mobile number"
        />

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
