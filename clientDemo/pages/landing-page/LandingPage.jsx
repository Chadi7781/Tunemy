import React from "react";
import AvailableCourses from "../../components/available-courses/AvailableCourses";
import Feature from "../../components/feature/Feature";
import Hero from "../../components/hero-section/Hero";
import Header from "../../components/navbar/Header";
import Testimoni from "../../components/testimoni/Testimoni";
import WhyChooseUs from "../../components/why-choose-section/WhyChooseUs";

function Landingpage() {

  return(
    <>

<Header/>
<Hero/>

<WhyChooseUs/>
<AvailableCourses/>
<Feature/>
{/* <Testimoni/> */}
    </>
  )
}

export default Landingpage;
