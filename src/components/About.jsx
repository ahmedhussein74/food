import React from "react";
import meat from "../images/meat.png";

const About = () => {
  return (
    <section id="about" className="py-5 flex justify-around flex-wrap bg-slate-900">
      <img src={meat} className="w-56 h-65 md:w-96 md:h-96" />
      <div className="w-3/4 md:w-1/2 m-5">
        <h1 className="text-white text-2xl md:text-3xl mb-3">
          <span className="text-amber-400">About</span> Us
        </h1>
        <h2 className="text-white my-3">Why choose us</h2>
        <p className="text-white py-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
          mollitia nesciunt provident neque est optio adipisci, eos at officia,
          aperiam dolor velit et magni nam aliquid saepe fugit ex odit?
        </p>
        <button className="btn bg-amber-400 text-slate-900 px-3 py-1 mt-2 rounded">
          Order now
        </button>
      </div>
    </section>
  );
};

export default About;
