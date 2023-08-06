import React from "react";
import { useState } from "react";

const Nav = () => {
  const [view, setView] = useState(false);

  const changeHeight = () => {
    if (view) {
      setView(false);
      document.querySelector("nav").style.height = "50px";
    } else {
      setView(true);
      document.querySelector("nav").style.height = "300px";
    }
  };
  return (
    <nav className="flex flex-wrap justify-between overflow-hidden shadow-lg px-3">
      <header className="text-amber-400 font-mono font-bold text-xl md:text-3xl flex items-center">
        Food
      </header>
      <i
        onClick={changeHeight}
        className="fa-solid fa-bars block md:hidden text-xl flex items-center"
      ></i>
      <aside className="w-full md:w-2/4 flex flex-wrap justify-center md:justify-around">
        <a
          href="#home"
          onClick={changeHeight}
          className="w-full md:w-fit text-xl flex items-center"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={changeHeight}
          className="w-full md:w-fit text-xl flex items-center"
        >
          About
        </a>
        <a
          href="#menu"
          onClick={changeHeight}
          className="w-full md:w-fit text-xl flex items-center"
        >
          Menu
        </a>
        <a
          href="#gallery"
          onClick={changeHeight}
          className="w-full md:w-fit text-xl flex items-center"
        >
          Gallery
        </a>
        <a
          href="#reviews"
          onClick={changeHeight}
          className="w-full md:w-fit text-xl flex items-center"
        >
          Reviews
        </a>
      </aside>
    </nav>
  );
};

export default Nav;
