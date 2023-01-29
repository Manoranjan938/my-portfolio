import React from "react";
import { projectData } from "./data/data";
import WorkItems from "./WorkItems";

const Works = () => {
  return (
    <div className="work__container container grid">
      {projectData.map((item) => {
        return <WorkItems item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Works;
