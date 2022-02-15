import React, { useState } from "react";
import '../App.css'
import { auth } from "../fire";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const gprovider = new GoogleAuthProvider();
  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }
  const gLogin = () => {
    signInWithPopup(auth, gprovider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log({ credential, token, user });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
  };
  const logout = () => {
    auth.signOut();
    console.log("logout");
  };

  return (
    <div className="App">
      <div className='loginbox'>
        <form onSubmit={submitHandler}>
          <h3>Login Here</h3>
          <label for="email">Username</label>
          <input className="email" type="text" placeholder='Email or Phone' onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
          <label for="pass">Password</label>
          <input className="pass" type="password" placeholder='Password' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
          <button className="btn">Log In</button>
          <div class="social">
            <div className="go">
              <button className="google" onClick={gLogin}>Google</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

}

export default LoginForm