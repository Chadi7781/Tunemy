import React from "react";
import AvailableCourses from "../../components/available-courses/AvailableCourses";
import Feature from "../../components/feature/Feature";
import WhyChooseUs from "../../components/why-choose-section/WhyChooseUs";

function Landingpage() {
  return (
    <>
      <WhyChooseUs />
      <AvailableCourses />
      <Feature />
      {/* <Testimoni/> */}
    </>
  );
}

export default Landingpage;
