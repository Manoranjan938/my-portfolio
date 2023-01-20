import React from "react";
import { projectImgs } from "./projectimg";

const ProjectImageGallery = () => {
  return (
    <section className="project__content__container">
      <h3>Image Gallary</h3>
      <div className="image__lists">
        {projectImgs.map((item) =>
          item.projectId === 1
            ? item.images.map((img) => (
                <div className="single" key={img.id}>
                  <img src={img.image} alt="" />
                </div>
              ))
            : null
        )}
      </div>
    </section>
  );
};

export default ProjectImageGallery;
