import React from "react";

import "./Scoller.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scoll = this.document.querySelector(".scroll__up");
    if (this.scrollY >= 560) scoll.classList.add("show-scroll");
    else scoll.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scroll__up">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
