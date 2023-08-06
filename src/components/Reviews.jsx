import React from "react";
import profile from "../images/profile.png";

const Reviews = () => {
  const reviews = [1,2,3]
  return (
    <section id="reviews" className="py-5">
      <h1 className="text-center text-2xl md:text-3xl font-bold">
        Our <span className="text-amber-400">reviews</span>
      </h1>
      <div className="flex justify-center flex-wrap py-5">
        {reviews.map((element) => (
          <div key={element} className="w-56 text-center m-3 px-1 py-5 border-2 border-gray-300 rounded shadow-lg">
            <img
              src={profile}
              className="w-20 h-20 rounded-full border-2 border-amber-400 mx-auto"
            />
            <h2 className="font-bold text-xl text-amber-400 my-3">Client</h2>
            <p className="text-gray-500 mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p>
              <i className="fa-solid fa-star text-amber-400"></i>
              <i className="fa-solid fa-star text-amber-400"></i>
              <i className="fa-solid fa-star text-amber-400"></i>
              <i className="fa-solid fa-star text-amber-400"></i>
              <i className="fa-solid fa-star text-amber-400"></i>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
