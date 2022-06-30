import Head from "next/head";
import Image from "next/image";

import { toast } from "react-toastify";

import { useState } from "react";
import axios from "axios";

import { connect } from "react-redux";

const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [textChange, setTextChange] = useState("Sign up");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTextChange("Submitting...");
    try {
      let userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        hashed_password: password,
      };

      console.log(props);
      toast.success("Registration successful. Please sign in.");
      setTextChange("Submitted");
    } catch (err) {
      toast.error(err);
      setTextChange("Sign up");
    }
  };
  return (
    <>
      <div className="container col-md-4 offset-md-4 pb-5 ">
        <div className="title">
          <h3 className="text-4xl">
            {" "}
            Welcome to{" "}
            <strong className="text-black font-extrabold text-4xl">
              Chadi Academy
            </strong>
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="rounded-lg">
          <div className="content ">
            <span style={{ fontSize: "17px", position: "absolute" }}>
              C'est rapide et c'est facile.
            </span>
            <div className="container pt-5 ">
              <div className="row ">
                <div className="col-12 col-md-6">
                  <div className="floating-form mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      autoComplete="off"
                      required
                    />
                    <label htmlFor="firstName">First name</label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="floating-form mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      autoComplete="off"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <label htmlFor="lastname">Last name</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="floating-form mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="subject"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <button type="submit" className="signin-btn">
              {textChange ? textChange : "Sign up"}
            </button>
            <hr className="divider" />

            <div className="signin-link">
              <span>
                Already have an account<button className="signin"></button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
