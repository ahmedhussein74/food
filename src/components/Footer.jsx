import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="flex justify-center flex-wrap">
        <ul className="w-64 md:64 my-5 text-center text-lg md:text-xl">
          <li className="font-bold mb-2 text-amber-400">Locations</li>
          <li>Cairo</li>
          <li>Giza</li>
          <li>Alex</li>
          <li>Aswan</li>
        </ul>
        <ul className="w-64 md:64 my-5 text-center text-lg md:text-xl">
          <li className="font-bold mb-2 text-amber-400">Accounts</li>
          <li>Facebook</li>
          <li>Linkedin</li>
          <li>Gmail</li>
          <li>Instagram</li>
        </ul>
        <ul className="w-64 md:64 my-5 text-center text-lg md:text-xl">
          <li className="font-bold mb-2 text-amber-400">Our Services</li>
          <li>Easy</li>
          <li>Quick</li>
          <li>Cheap</li>
          <li>Contact</li>
        </ul>
        <ul className="w-64 md:64 my-5 text-center text-lg md:text-xl">
          <li className="font-bold mb-2 text-amber-400">Team</li>
          <li>Support</li>
          <li>Markting</li>
          <li>Jobs</li>
          <li>Freelance</li>
        </ul>
      </div>
      <p className="py-2 flex justify-center">
        <a href="https://www.linkedin.com/in/ahmed-hussein-23b95b1b8">
          <i className="fa-brands fa-linkedin text-2xl mx-2 mb-3"></i>
        </a>
        <a href="https://github.com/ahmedhussein74">
          <i className="fa-brands fa-square-github text-2xl mx-2 mb-3"></i>
        </a>
        <a href="https://www.facebook.com/AhmedHusein22/">
          <i className="fa-brands fa-square-facebook text-2xl mx-2 mb-3"></i>
        </a>
        <a href="mailto:ahmedhusseinofficial22@gmail.com">
          <i className="fa-solid fa-envelope text-2xl mx-2 mb-3"></i>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
