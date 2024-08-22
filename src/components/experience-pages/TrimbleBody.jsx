import { useNavigate } from "react-router-dom";
import React from "react";

const TrimbleBody = () => {
  let navigate = useNavigate();
  const redirectPage = () => {
    let path = "/experience";
    navigate(path);
  };

  return (
    <div className="mx-10">
      <button
        className="mt-6 bg-[#595C70] rounded-full py-4 px-8 font-jet text-white text-[18px]"
        onClick={redirectPage}
      >
        Back
        {/* <NavLink to="/experience">Back</NavLink> */}
      </button>
      <h1 className="font-jet text-white text-center text-[20px]">
        Detailed Overview <br />
        My time at Trimble <br />
        <br /> May 2023 - August 2023 (Summer of 2023)
      </h1>
      <p className="mt-6 mb-20 p-4 font-jet bg-[#595C70] rounded-2xl text-white text-[18px]">
        Company: Trimble <br />
        <br /> Position: Hardware Testing Intern <br />
        <br />
        Overview: <br />
        Trimble is an American company that specializes in software, hardware,
        and services technology. They support global industries in construction,
        agriculture, geospatial, and transportation.
        <br />
        <br />
        Here is a link to their website for more details:
        <a href="https://www.trimble.com/en" className="text-blue-400">
          https://www.trimble.com/en
        </a>
        <br />
        <br /> During my time at Trimble, I was able to travel to the
        headquarters in Westminster, Colorado and spend my summer there working
        on the Automated Testing Team for the agriculture division. What I was
        tasked to do was to create a couple of automated dashboards that will
        update whenever new firmware on their NAV receivers were released. The
        data has already been collected for the new firmware, they just wanted a
        better way (and a more automated way) to visualize the data since they
        were using excel to make charts. Using Python, the Pandas library, a
        little bit a math, and website known as DOMO, I was able to create these
        dashboards. DOMO is a website that is used to create these dashboards,
        but I had to use Python and Pandas to obtain the data, parse it out so
        that DOMO can correctly see the data. Once DOMO can actually see this
        data, I was able to make the dashboards as well as the graphs on the
        dashboards. I spent most of my time at Trimble creating these dashboards
        for the new firmwares and I also edited another dashboard that a
        previous intern worked on. In total, I created 2 automated dashboards
        for new firmware and edited another DOMO dashboard to clean up the data.
        <br />
        In the latter half of my internship, I was put on another project that
        has been a running intern project for past interns on the team. This
        project is known as “Pi in The Sky”. The premise of the project is
        simple: Whenever there is new firmware, the testers have to physical go
        onto the roof of the building multiple times a day in order to test a
        single firmware on their NAV receivers. The “Pi in The Sky” project aims
        to reduce the number of times someone needs to run to the roof by
        virtually sending the firmware data to the NAV receivers. This is done
        by using Python to send data to a Raspberry Pi, which is connected to
        the NAV receivers, and uploading the firmware to the receiver. There is
        also a front-end portion of the project which was created using
        HTML/CSS/JavaScript. How I contributed to the project was by
        implementing a new feature to set a virtual datum whenever they perform
        firmware testing. This was done using Python and sending a series of
        hex-codes via serial communication to the receiver. On the dashboards, I
        used Confluence to create documentation on the code and provided videos
        on a step-by-step guide on what to do if a new firmware is introduced so
        the team would be able to fix any problems as fast as they can. On the
        “Pi in the Sky” project, I updated the existing documentation on
        Confluence, and add the feature I implemented. <br />
        <br />
        Technical Skills I used in this internship:
        <br />
        Python, Git, Bitbucket, AWS Buckets, Raspberry Pi, VScode, VScode
        debugger, DOMO, Confluence, Jira, and Testing.
      </p>
    </div>
  );
};

export default TrimbleBody;
