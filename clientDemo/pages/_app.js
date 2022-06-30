import App from "next/app";
import "../styles/tailwindcss.css";

import "../public/css/styles.css";
import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";

import Landingpage from "./landing-page/LandingPage";
import Register from "./authentification/register";
import Signin from "./authentification/signin";
import Footer from "../components/footer/Footer";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const appProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    console.log(appProps);
    return { appProps: appProps };
  }

  render() {
    const { Component, appProps } = this.props;

    return (
      <>
        <ToastContainer position="top-center" />
        <Component {...appProps} />
        {/* <Signin /> */}
        <Landingpage />
        <Footer />
      </>
    );
  }
}
export default MyApp;
