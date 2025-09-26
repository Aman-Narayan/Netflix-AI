import { useRef, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { BgURL, ProfileURL2 } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const termsAndConditions = useRef(null);

  const toogleSignUpNow = () => {
    setIsSignInForm(!isSignInForm);
  };
  const HandleBtnClick = () => {
    // Validate data
    let msg = null;
    if (!isSignInForm) {
      // Validation for Sign Up form
      msg = checkValidateData(
        email.current.value,
        password.current.value,
        confirmPassword.current.value,
        termsAndConditions.current.checked
      );
    } else {
      // Validation for Sign In form (only email and password)
      msg = checkValidateData(
        email.current.value,
        password.current.value
        // termsAndConditions.current.checked
      );
    }
    setErrorMsg(msg);
    if (msg) return;
    //sign in and signup logic
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: ProfileURL2,
          })
            .then(() => {
              // Profile updated
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
        });
    }
  };
  return (
    <div className="">
      <Header />
      <div className="absolute w-screen">
        <img
          src={BgURL}
          alt="BackgroundImage"
          className="w-screen h-screen object-cover"
        />
      </div>
      <form
        className="absolute my-36 p-12 w-[80%] lg:w-[25%] md:w-[60%] bg-black text-white mx-auto right-0 left-0 bg-opacity-70 rounded-l"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter full Name"
            className="my-2 p-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="my-4 p-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 p-2 w-full bg-gray-700"
        />
        {!isSignInForm && (
          <input
            ref={confirmPassword}
            type="password"
            placeholder="Confirm Password"
            className="my-2 p-2 w-full bg-gray-700"
          />
        )}
        {!isSignInForm && (
          <div className="flex items-center my-4">
            <input
              ref={termsAndConditions}
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="link-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-red-600 dark:text-red-500 hover:underline"
              >
                Terms{" "}
              </a>
              and
              <a
                href="#"
                className="text-red-600 dark:text-red-500 hover:underline"
              >
                {" "}
                Conditions
              </a>
              .
            </label>
          </div>
        )}
        <p className="text-red-500 font-semibold text-center">{errorMsg}</p>
        <button className="p-2 my-5 bg-red-800 w-full" onClick={HandleBtnClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toogleSignUpNow}>
          {!isSignInForm
            ? "Already registered? Sign Up Now"
            : "New to Netflix? Sign In Now"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
