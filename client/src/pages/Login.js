import React from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        dispatch(addUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL
        }))
        setTimeout(() => {
          navigate('/');
        }, 1500)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
        // ...
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //sign out successfull
        toast.success("Log Out successfully!");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center w-96 m-auto py-52">
      <div className="text-center">
        <div className="flex gap-10 items-center mb-7">
          <div
            onClick={handleGoogleLogin}
            className="flex gap-5 border-solid border-2 border-black-200 px-5 py-2 items-center rounded-xl text-gray cursor-pointer   hover:border-y-indigo-500"
          >
            <img
              className="w-8"
              src="data:image/png;base64,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"
              alt="googlelogo"
            ></img>
            <span>Sign in with Google</span>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center text-black font-bold text-white bg-black w-32 py-4 justify-center rounded-xl"
          >
            Sign Out
          </button>
        </div>

        <div className="flex gap-10 items-center mb-7">
          <div className="flex gap-5 border-solid border-2 border-black-200 px-5 py-2 items-center rounded-xl text-gray cursor-pointer hover:border-y-indigo-500">
            <img
              className="w-8"
              src="data:image/png;base64,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"
              alt="githublogo"
            ></img>
            <span>Sign in with GitHub</span>
          </div>
          <button className="flex items-center text-black font-bold text-white bg-black w-32 py-4 justify-center rounded-xl">
            Sign Out
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default Login;
