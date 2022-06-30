import React from "react";

function WhyChooseUs() {
  return (
    <div>
      <section class=" mx-auto pt-0 bg-white" id="about">
        <div class="py-16 ">
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div class="md:5/12 lg:w-5/12">
                <img
                  src="assets/images/choose-us.jpg"
                  alt="image"
                  loading="lazy"
                  className="b-1 border-8 border-white rounded-xl"
                  width=""
                  height=""
                />
              </div>
              <div class="md:7/12  lg:w-6/12">
                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                  Who We Are
                </h2>
                <p class="mt-6 text-grayContent">
                  ChadiAcademy is your partner to acheive your dream. We focus
                  on giving you real developer skills that bring you real
                  results: Clients, jobs, self-improvement and profit let's
                  change the future now . 👇
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs;
