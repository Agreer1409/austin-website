import { useNavigate } from "react-router-dom";
import React from "react";

const ABSBody = () => {
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
        My time at The American Bureau of Shipping <br />
        <br /> September 2022 - May 2023
      </h1>
      <p className="mt-6 mb-20 p-4 font-jet bg-[#595C70] rounded-2xl text-white text-[18px]">
        Company: The American Bureau of Shipping
        <br />
        <br /> Position: Intern <br />
        <br />
        Overview: <br />
        The American Bureau of Shipping (ABS) is a global leader in
        classification services for marine and offshore assets. They aim to
        provide advancing technology and data analytics to their members and
        clients, supporting marine and offshore business ventures for both
        traditional and non-traditional clients.
        <br />
        <br />
        Here is a link to their website to learn more:
        <a href="https://ww2.eagle.org/en.html" className="text-blue-400">
          https://ww2.eagle.org/en.html
        </a>
        <br />
        <br /> During my time as an intern at The American Bureau of Shipping, I
        worked on several projects related to optical character recognition
        (OCR) on PDF documents. What I was in charge of was training the machine
        learning models to perform OCR on 400+ PDF documents. I trained several
        ML models using Microsoft Azure’s ML tools. Once the models were all
        trained, they outputted a what they detected in JSON format. Using
        Python and Regular Expressions, I was able to extract what was needed
        from the model. While performing these models and tests, I also created
        automated scripts that will run the PDF documents through the model so I
        wouldn’t have to manually grab several PDFs at once. <br />
        <br />
        Technical Skills and Technology I used in this internship:
        <br />
        Python, Git, VScode, Microsoft Azure Machine Learning, and Regular
        Expressions
      </p>
    </div>
  );
};

export default ABSBody;
