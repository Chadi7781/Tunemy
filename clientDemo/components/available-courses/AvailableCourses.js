import Link from "next/link";
import React from "react";
import Button from "../../util/ui/widgets/Button";

function AvailableCourses() {
  return (
    <section className=" py-24 bg-[#f3f6f7]">
      <div className="container ">
        <div className=" from-white-300 to-white-500 w-full py-14" id="pricing">
          <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
            <div className="flex flex-col w-full ">
              <h3 className="text-2xl sm:text-8xlxl lg:text-4xl font-medium text-black-600 leading-relaxed ">
                Available Courses
              </h3>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
          <div className="relative cursor-pointer p-4 w-full minHeight-[460px] bg-white rounded-lg overflow-hidden  hover:shadow-md">
            <div>
              <div className="absolute top-0 right-0 mt-2 mr-2 p-4 z-20 flex justify-between">
                <div className="inline-flex items-center justify-center w-8 h-8  p-4  bg-white shadow-sm">
                  <span>Free</span>
                </div>
              </div>

              <div className="relative block h-full">
                <div className="h-32 bg-gray-100 rounded-lg cursor-pointer">
                  <img src="assets/images/java-bg.jpg" />
                </div>
              </div>
            </div>
            <h2 className="mt-2 text-gray-800 text-sm font-extrabold line-clamp-1">
              Learn Java from zero to hero
            </h2>
            <p className="mt-2 text-gray-800 text-sm">@Mohamed_ali</p>
            <span className="mt-2 text-[#6a6f73] text-ellipsis  text-sm">
              Training & Assessment
            </span>{" "}
            <br />
            <span className="mt-2 text-[#6a6f73] text-ellipsis  text-sm">
              8 weeks
            </span>
            <button
              type="submit"
              className="flex mt-8 text-secondColor  font-bold  hover:text-primaryColor transition delay-100 no-underline items-center p-2 rounded text-sm w-auto"
            >
              <a
                href="javascript:void(0)"
                class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
              >
                start now
              </a>{" "}
            </button>
          </div>
          <div className="relative cursor-pointer p-4 w-full minHeight-[460px] bg-white rounded-lg overflow-hidden  hover:shadow-md">
            <div>
              <div className="absolute top-0 right-0 mt-2 mr-2 p-4 z-20 flex justify-between">
                <div className="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm"></div>
              </div>

              <div className="relative block h-full">
                <div className="h-32 bg-gray-100 rounded-lg cursor-pointer">
                  <img src="assets/images/cpp-bg.jpg" />
                </div>
              </div>
            </div>
            <h2 className="mt-2 text-gray-800 text-sm font-extrabold line-clamp-1">
              Learn c++ now
            </h2>
            <p className="mt-2 text-gray-800 text-sm">@Mohamed_ali</p>
            <span className="mt-2 text-[#6a6f73] text-ellipsis  text-sm">
              Training & Assessment
            </span>{" "}
            <br />
            <span className="mt-2 text-[#6a6f73] text-ellipsis  text-sm">
              8 weeks
            </span>
            <button
              type="submit"
              className="flex mt-8 text-secondColor  font-bold  hover:text-primaryColor transition delay-100 no-underline items-center p-2 rounded text-sm w-auto"
            >
              <a
                href="javascript:void(0)"
                class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
              >
                start now
              </a>{" "}
            </button>
          </div>
          <div className="relative cursor-pointer p-4 w-full minHeight-[460px] bg-white rounded-lg overflow-hidden  hover:shadow-md">
            <div>
              <div className="absolute top-0 right-0 mt-2 mr-2 p-4 z-20 flex justify-between">
                <div className="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm"></div>
              </div>

              <div className="relative block h-full">
                <div className="h-32 bg-gray-100 rounded-lg">
                  <img src="assets/images/java-bg.jpg" />
                </div>
              </div>
            </div>
            <h2 className="mt-2 text-gray-800 text-sm font-extrabold line-clamp-1">
              Full php tutorial basics
            </h2>
            <p className="mt-2 text-gray-800 text-sm">@Mohamed_ali</p>
            <span className="mt-2 text-[#6a6f73] text-ellipsis  text-sm">
              Training & Assessment
            </span>{" "}
            <br />
            <span className="mt-2 text-[#6a6f73] text-ellipsis  text-sm">
              8 weeks
            </span>
            <button
              type="submit"
              className="flex mt-8 text-secondColor  font-bold  hover:text-primaryColor transition delay-100 no-underline items-center p-2 rounded text-sm w-auto"
            >
              <a
                href="javascript:void(0)"
                class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
              >
                start now
              </a>{" "}
            </button>
          </div>
          <div className="relative cursor-pointer p-4 w-full minHeight-[460px] bg-white rounded-lg overflow-hidden  hover:shadow-md">
            <div>
              <div className="absolute top-0 right-0 mt-2 mr-2 p-4 z-20 flex justify-between">
                <div className="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm"></div>
              </div>

              <div className="relative block h-full">
                <div className="h-32 bg-gray-100 rounded-lg">
                  <img src="assets/images/cpp-bg.jpg" />
                </div>
              </div>
            </div>
            <h2 className="mt-2 text-gray-800 text-sm font-extrabold line-clamp-1">
              Photoshop Master Course
            </h2>
            <p className="mt-2 text-gray-800 text-sm">@Yahya_heni</p>
            <span className="mt-2 text-[#6a6f73] text-ellipsis  text-sm">
              Training & Assessment
            </span>{" "}
            <br />
            <span className="mt-2 text-[#6a6f73] text-ellipsis  text-sm">
              8 weeks
            </span>
            <button
              type="submit"
              className="flex mt-8 text-secondColor  font-bold  hover:text-primaryColor transition delay-100 no-underline items-center p-2 rounded text-sm w-auto"
            >
              <a
                href="javascript:void(0)"
                class="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
              >
                start now
              </a>{" "}
            </button>
          </div>
        </div>{" "}
      </div>
      {/* <Link href="/" className="no-underline flex text-center ">
        <span> show all courses</span>
      </Link> */}
    </section>
  );
}

export default AvailableCourses;
