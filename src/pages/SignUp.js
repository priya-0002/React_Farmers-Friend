import React, { useState,useContext } from "react";
import firebase from "firebase";
import { Link ,useHistory} from "react-router-dom";
import { auth } from "../firebase";

import Header from "../partials/Header";
import {UserContext} from '../contexts/user'

function SignUp() {
  let history=useHistory();
  const [user,setUser] = useContext(UserContext).user;
  const [details, setDetails] = useState({
    phno: "",
    otp: "",
  });
  const [confirm, setConfirm] = useState(null);
  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      }
    );
  };

  const onPhoneSubmit = async (e) => {
    e.preventDefault();
    setUpRecaptcha();
    const phoneNumber = details.phno;
    const appVerifier = window.recaptchaVerifier;
    const confirmation = await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier);
    setConfirm(confirmation);
    //   .then((confirmationResult) => {
    //     // SMS sent. Prompt user to type the code from the message, then sign the
    //     // user in with confirmationResult.confirm(code).
    //     const code = details.otp
    // confirmationResult.confirm(code).then((result) => {
    // // User signed in successfully.
    // const user = result.user;
    // console.log(user);
    // console.log("logged in")
    // // ...
    // }).catch((error) => {
    // // User couldn't sign in (bad verification code?)
    // // ...
    // });
    //     window.confirmationResult = confirmationResult;
    //     // ...
    //   })
    // .catch((error) => {
    //     // Error; SMS not sent
    //     // ...
    //     console.log('sms not sent')
    //   });
  };
  const onSignInSubmit = async () => {
    if (confirm != null) {
      const code = details.otp;
      console.log(code);
      await confirm
        .confirm(code)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
      
          console.log("logged in");
          setUser(user);history.push('/home')
          
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.log(error);
          // ...
        });
    }
  };
  const inputHandler = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome. We exist to help you.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div id="recaptcha-container"></div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Contact Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="phno"
                        className="form-input w-full text-gray-800"
                        onChange={inputHandler}
                        placeholder="+91"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button
                        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                        onClick={onPhoneSubmit}
                      >
                        Send otp
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-sm text-gray-500 text-center mt-3">
                  By creating an signing in, you agree to the{" "}
                  <a className="underline" href="#0">
                    terms & conditions
                  </a>
                  , and our{" "}
                  <a className="underline" href="#0">
                    privacy policy
                  </a>
                  .
                </div>

                <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-300 flex-grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-600 italic">Or if recieved otp</div>
                  <div
                    className="border-t border-gray-300 flex-grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-800 text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Enter your otp <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="otp"
                      onChange={inputHandler}
                      className="form-input w-full text-gray-800"
                      placeholder="enter here"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button
                      className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                      id="demo"
                      onClick={onSignInSubmit}
                    >
                      Sign In
                    </button>
                  </div>
                </div>

                <div className="text-gray-600 text-center mt-6">
                  Want to go back?{" "}
                  <Link
                    to="/signin"
                    className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                  >
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUp;
