import { useNavigate } from "react-router-dom";
import React from "react";

import "react-vertical-timeline-component/style.min.css";

const ExperienceBody = () => {
  let navigate = useNavigate();
  const redirectPage = (company) => {
    console.log(company)
    let path = "/experience";
    if (company === "cadre5") {
      path = path + "/austin-cadre5";
      navigate(path);
    } else if (company === "trimble") {
      path = path + "/austin-trimble";
      navigate(path);
    } else {
      path = path + "/austin-abs";
      navigate(path);
    }
  };
  return (
    <div>
      <div className="mt-7 mx-6 border-b">
        <div className="p-4 bg-[#595C70] rounded-2xl text-white font-jet text-center text-[20px]">
          <p>
            Welcome to the Experience section of my website. This section will
            provide details about the professional experience I've had up to
            this point (August 2024).
          </p>
        </div>
        <div className="mt-4 mb-3 py-4 text-white font-jet text-center grid grid-cols-1 md:grid-cols-4">
          <p className="md:col-span-3 bg-[#595c70] rounded-2xl md:mr-5 p-6 text-[20px]">
            In my undergrad, I completed 3 internships, with each one being in
            difference fields of Computer Science. <br />
            <br /> Starting with the mode recent, I'll talk about each company,
            my role, and what I did during my time there.
          </p>
          <p className="bg-[#595c70] rounded-2xl text-[25px] px-4 py-8 md:mt-0 mt-7">
            Click on a position to see more details!
          </p>
        </div>
      </div>

      <div className="mt-10 mb-20 sm:mx-40 mx-10">
        <ol className="relative border-s border-white ">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="ml-2 font-bold font-jet text-3xl text-white">
              Cadre5
            </h3>
            <h4 className="ml-2 font-jet text-2xl text-white">
              January 2024 - May 2024
            </h4>
            <h5 className="ml-2 mb-4 text-xl font-jet text-white">
              Software Engineering Intern
            </h5>
            <p className="ml-2 font-jet text-[18px] text-white">
              Cadre5 is a Knoxville based company that specializes in designing
              and building software for various contractors. The software they
              build ranges from front-end to back-end development....
            </p>
            <button
              className="bg-white text-black font-jet text-[16px] p-2 mt-3 ml-2 rounded-full"
              onClick={() => redirectPage("cadre5")}
            >
              Learn More!
            </button>
          </li>

          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="ml-2 font-bold font-jet text-3xl text-white">
              Trimble
            </h3>
            <h4 className="ml-2 font-jet text-2xl text-white">
              May 2023 - August 2023
            </h4>
            <h5 className="ml-2 mb-4 text-xl font-jet text-white">
              Hardware Testing Intern
            </h5>
            <p className="ml-2 font-jet text-[18px] text-white">
              Trimble is an American company that specializes in software,
              hardware, and services technology. They support global industries
              in construction, agriculture....
            </p>
            <button
              className="bg-white text-black font-jet text-[16px] p-2 mt-3 ml-2 rounded-full"
              onClick={() => redirectPage("trimble")}
            >
              Learn More!
            </button>
          </li>

          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white ">
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="ml-2 font-bold font-jet text-3xl text-white">
              The American Bureau of Shipping
            </h3>
            <h4 className="ml-2 font-jet text-2xl text-white">
              September 2022 - May 2023
            </h4>
            <h5 className="ml-2 mb-4 text-xl font-jet text-white">
              Intern for Digital Team
            </h5>
            <p className="ml-2 font-jet text-[18px] text-white">
              The American Bureau of Shipping (ABS) is a global leader in
              classification services for marine and offshore assets. They aim
              to provide advancing technology and data analytics to their
              members....
            </p>
            <button
              className="bg-white text-black font-jet text-[16px] p-2 mt-3 ml-2 rounded-full"
              onClick={() => redirectPage("abs")}
            >
              Learn More!
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ExperienceBody;
