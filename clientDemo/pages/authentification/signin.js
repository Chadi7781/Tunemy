import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password });
  };
  return (
    <>
      {/* <h1 className="jumbotron text-center bg-primary square">
        {" "}
        <img className="help-img" src="help.png" />
        Sign in{" "}
      </h1> */}

      <div className="max-w-md flex items-center justify-center m-auto p-4 ">
        <div className="title"></div>
        <form onSubmit={handleSubmit}>
          <div className="content ">
            <h1>Sign Now!</h1>
            <div className="title-signin">
              <span>
                Tenez-vous au courant des évolutions de votre monde
                professionnel
              </span>
            </div>

            <div className="outline relative my-11 border-none  focus-within:border-secondColorHover">
              <input
                type="text"
                name="email"
                placeholder=" "
                className="  w-full block p-4 text-lg   appearance-none  focus:ring-transparent bg-transparent"
              />
              <label
                for="email"
                className="absolute top-0 text-lg p-4 origin-0  -z-2  duration-300 bg-white"
              >
                Email
              </label>
            </div>
            <div className="outline relative my-11 border-1  focus-within:border-secondColorHover">
              <input
                type="password"
                name="password"
                placeholder=" "
                className="w-full block p-4 text-lg appearance-none focus:ring-transparent bg-transparent"
              />
              <label
                for="password"
                className="absolute top-0 text-lg p-4 -z-2 origin-0   duration-300 bg-white"
              >
                Password
              </label>
            </div>

            <button type="submit" className="signin-btn">
              Submit
            </button>
            <div className="separator"></div>

            <button className="google-btn">
              <img src="google.svg" alt="" />
              Continue with Google
            </button>
            <div className="signin-link">
              <span>
                I don't have an account
                <button className="signin">Sign up</button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
