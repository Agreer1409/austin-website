import React from "react";
import pfp from "../assets/image.png"

const HomeBody = () => {
  return (
    <div className="mt-7 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="flex flex-col mr-4">
        <div className="mt-2 mb-10">
          <img className='rounded-full' src={pfp} alt='austin-picture'></img>
        </div>
        <div className="bg-[#595C70] text-white font-jet rounded-2xl py-10 px-4">
          <p>Austin Greer</p>
          <p>A Quick Overview About Me!</p>
          <p>-Recently earned a  Bachelor's in Computer Engineering</p>
          <p>-Pursuing a Master's in Computer Science, focusing on Software Development.</p>
          <p>-Had 3 internships with each being in different fields of Computer Science</p>
          <p>-Loves Python, but have used several other languages and development tools</p>
          <p>-Currently looking for opportunities!</p>
        </div>
      </div>
      <div className="bg-[#595C70] text-white text-[20px] font-jet rounded-2xl py-10 px-4 md:col-span-3">
        <p>
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