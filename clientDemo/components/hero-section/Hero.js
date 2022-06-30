import React from "react";

function Hero() {
  return (
    <section className="header_area">
      <div
        id="home"
        className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center"
      >
        <div className="hero_shape shape_1">
          <img src="assets/images/shape/shape-1.svg" alt="shape" />
        </div>
        {""}
        <div className="hero_shape shape_2">
          <img src="assets/images/shape/shape-2.svg" alt="shape" />
        </div>
        {""}
        <div className="hero_shape shape_3">
          <img src="assets/images/shape/shape-3.svg" alt="shape" />
        </div>
        {""}
        <div className="hero_shape shape_4">
          <img src="assets/images/shape/shape-4.svg" alt="shape" />
        </div>
        {""}
        <div className="hero_shape shape_6">
          <img src="assets/images/shape/shape-1.svg" alt="shape" />
        </div>
        {""}
        <div className="hero_shape shape_7">
          <img src="assets/images/shape/shape-4.svg" alt="shape" />
        </div>
        {""}
        <div className="hero_shape shape_8">
          <img src="assets/images/shape/shape-3.svg" alt="shape" />
        </div>
        {""}
        <div className="hero_shape shape_9">
          <img src="assets/images/shape/shape-2.svg" alt="shape" />
        </div>
        {""}
        <div className="hero_shape shape_10">
          <img src="assets/images/shape/shape-4.svg" alt="shape" />
        </div>
        {""}
        <div className="hero_shape shape_11">
          <img src="assets/images/shape/shape-1.svg" alt="shape" />
        </div>
        {""}
        <div className="hero_shape shape_12">
          <img src="assets/images/shape/shape-2.svg" alt="shape" />
        </div>
        {""}

        <div className="container">
          <div className="row">
            <div className="w-full lg:w-1/2">
              <div className="header_hero_content pt-150 lg:pt-0">
                <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">
                  Empower <span className="text-grayTitle">Yourself</span>
                </h2>
                <p className="mt-8 lg:mr-8 text-left text-grayContent">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy <br />
                  eirmod tempor invidunt ut labore et dolore magna.
                </p>
                <div className="hero_btn  mt-10">
                  <a className="main-btn" href="#0">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_shape hidden lg:block"></div>

        <div className="header_image flex items-center">
          <div className="w-full">
            <img src="assets/images/header-hero.svg" alt="Header Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
