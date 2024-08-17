import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const ExperienceBody = () => {
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
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "9px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          ></VerticalTimelineElement>
          <h3 className="vertical-timeline-element-title"> Company: Cadre5</h3>
          <h3 className="vertical-timeline-element-title"> Position: Software Engineering Intern</h3>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default ExperienceBody;
