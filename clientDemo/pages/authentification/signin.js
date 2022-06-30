import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
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
      <h1 className="jumbotron text-center bg-primary square">
        {" "}
        <img className="help-img" src="help.png" />
        Sign in{" "}
      </h1>

      <div className="container col-md-4 offset-md-4 pb-5">
        <div className="title"></div>
        <form onSubmit={handleSubmit}>
          <div className="content">
            <h1>Sign Now!</h1>
            <div className="title-signin">
              <span>
                Tenez-vous au courant des évolutions de votre monde
                professionnel
              </span>
            </div>
            <div className="container pt-5">
              <div className="row">
                <div className="col-12">
                  <div className="floating-form mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="subject"
                      autoComplete="off"
                      required
                    />
                    <label htmlFor="subject">Email</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="floating-form mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      autoComplete="off"
                      required
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
              </div>
            </div>
            <br />
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
