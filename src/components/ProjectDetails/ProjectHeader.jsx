import React, { useState } from "react";
import image1 from "assets/PM-Project.png";
import image2 from "assets/Job-Makers-Project.png";

import "./ProjectDetails.css";

const imageSliders = [
  {
    image: image1,
  },
  {
    image: image2,
  },
];

const ProjectHeader = () => {
  const [current, setCurrent] = useState(0);
  const length = imageSliders.length;

  if (!Array.isArray(imageSliders) || imageSliders.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  setTimeout(() => {
    nextSlide();
  }, 4000);
  return (
    <section className="slider">
      {imageSliders.map((slider, index) => {
        return (
          <>
            <div className={current === index ? "slide active" : "slide"} key={index}>
              {index === current ? (
                <img src={slider.image} alt="" className="image" />
              ) : null}
            </div>
          </>
        );
      })}
    </section>
  );
};

export default ProjectHeader;
