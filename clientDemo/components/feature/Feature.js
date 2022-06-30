import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <section className=" py-2 bg-sectionColor">
      <div className="container max-w-screen-xl mt-0 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
          <div className="flex w-full justify-end">
            <div className="h-full w-full p-4">
              <Image
                src="/assets/images/checklist.svg"
                alt="VPN Illustrasi"
                layout="responsive"
                quality={100}
                height={414}
                width={508}
              />
            </div>
          </div>
          <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
            <h3 className="text-3xl lg:text-4xl font-bold leading-relaxed text-black ">
              We Provide Many Features You Can Use
            </h3>
            <p className="my-2   leading-6 dark:text-gray-400">
              Get greater support from a professional coach with a membership
              service that really helps you build your potential and career with
              some access and more premium features that you shouldn't pass.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              <li className="relative circle-check custom-list">
                Powerfull online protection.
              </li>
              <li className="relative circle-check custom-list">
                Internet without borders.
              </li>
              <li className="relative circle-check custom-list">
                Supercharged VPN
              </li>
              <li className="relative circle-check custom-list">
                No specific time limits.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
