import { useNavigate } from "react-router-dom";
import React from "react";

const Cadre5Body = () => {
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
      </button>
      <h1 className="font-jet text-white text-center text-[20px]">
        Detailed Overview <br />
        My time at Cadre5 <br />
        <br /> Janurary 2024 - May 2024
      </h1>
      <p className="mt-6 mb-20 p-4 font-jet bg-[#595C70] rounded-2xl text-white text-[18px]">
        Company: Cadre5 <br />
        <br /> Position: Software Engineering Intern <br />
        <br />
        Overview: <br />
        Cadre5 is a Knoxville based company that specializes in designing and
        building software for various contractors. The software they build
        ranges from front-end to back-end development.
        <br />
        <br />
        Here is a link to their website for more details about them and the work
        they do:
        <a href="https://www.cadre5.com/" className="text-blue-400">
          https://www.cadre5.com/
        </a>
        <br />
        <br /> As a Software Engineering Intern, I was fortunate enough to work
        under the one of the Directors of Programming at the company. While I
        did not work at the company building, my internship was stationed at
        ORNL (Oak Ridge National Laboratory), where I assisted my manager and
        faculty at ORNL with their work in radiation detection and imaging. One
        of the first things I was tasked to do was to finish building a 3D
        printer that they started on. I was able to finish up the printer by
        installing the belts and loading the newest firmware and G-Code onto the
        main board. Soon after that, they wanted me to see if it was possible to
        send large zip files through an opto-isolator from one Arduino to
        another. This was most definitely a challenging task, but after some
        time, I was able to successfully send files up to a speed of 256,000
        baud. Later on, I was given the chance to build upon to their existing
        data acquisition system by writing Python code to obtain the CPU usage
        across the big 3 operating systems (Windows, Mac, and Linux) so that
        anyone that uses this data acquisition system can have access to this
        new feature. The last big notable task that I did at Cadre5 was using
        Python to develop a backend of an air sampler for the data acquisition
        system. This air sampler had to continuously collect data based on a
        certain wind direction, and we used a mix of Arduino boards, relays, and
        Python code to determine which relay should be collecting air or not.
        <br />
        <br />
        To be frank, it was more so a Computer Engineering internship rather a
        Software Engineering internship, but that did not matter because I had
        the background necessary to accomplish all the task given to me! Just
        like the other internships, I enjoyed every second of it.
        <br />
        <br /> Technical Skills I used in this internship: <br />
        Python, C++, C, Git, Gitlab, Arduino Boards, Circuit Boards, Raspberry
        Pi, Windows, MacOS, Linux, PyCharm, and PyCharm Debugger.
      </p>
    </div>
  );
};

export default Cadre5Body;
