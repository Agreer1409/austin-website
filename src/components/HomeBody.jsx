import React from "react";
import pfp from "../assets/austin-pfp.png"

const HomeBody = () => {
  return (
    <div className="mt-7 mx-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="flex flex-col mr-4">
        <div className="mt-2 mb-10">
          <img className='rounded-full' src={pfp} alt='austin-picture'></img>
        </div>
        <div className="bg-[#595C70] text-white font-jet rounded-2xl py-2 px-4 flex flex-col">
          <p className="my-1 mx-auto px-4 border-2 text-[26px]">Austin Greer</p>
          <p className="max-w-48 mx-auto my-1 text-center text-[20px]">A Quick Overview About Me!</p>
          <ul className="list-disc mx-7 my-3 text-[16px]">
            <li className="mb-4">Recently earned a  Bachelor's in Computer Engineering.</li>
            <li className="mb-4">Pursuing a Master's in Computer Science, focusing on Software Development.</li>
            <li className="mb-4">Had 3 internships with each being in different fields of Computer Science.</li>
            <li className="mb-4">Loves Python, but have used several other languages and development tools.</li>
            <li className="mb-4">Currently looking for opportunities!</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#595C70] text-white text-[20px] font-jet rounded-2xl py-10 px-4 md:col-span-3">
        <p className="mx-4">
          Welcome to my website! <br/><br/> I'm Austin, a recent graduate from the
          University of Tennessee, Knoxville, with a Bachelor's in Computer
          Engineering. Throughout undergrad, I took classes in both Computer
          Science and Electrical Engineering, leaning towards Computer Science
          as I reached my senior year. As of August of 2024, I'll be pursuing my
          Master's in Computer Science with a concentration on Software
          Development through UTK's Online Program (MSCS Online). <br/><br/>With my school
          being online, I'm actively seeking opportunities in the field of
          computer science. I've gained valuable experience through my previous
          internships (check out the EXPERIENCE tab!), and I am excited to
          embark on my career journey! <br/><br/>Feel free to browse my website and reach
          out if you'd like to connect! <br/><br/>Thanks for visiting me!
        </p>
      </div>
    </div>
  );
};

export default HomeBody;