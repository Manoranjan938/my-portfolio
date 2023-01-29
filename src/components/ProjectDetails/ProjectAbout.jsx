import { abotData } from "components/Work/data/aboutData";
import { projectData } from "components/Work/data/data";
import React from "react";

const ProjectAbout = ({ prId }) => {
  const dt = projectData.filter((item) => (item.id == prId ? item : null));
  const abt = abotData.filter((item) => (item.projectId == prId ? item : null));
  return (
    <section className="project__content__container">
      <h2 className="content__title">{dt[0].name}</h2>
      <div className="extras">
        <span className={`status ${abt[0].about.status}`}>
          {abt[0].about.status}
        </span>
        <span className={`project__type ${abt[0].about.type}`}>
          {abt[0].about.type} Project
        </span>
      </div>
      <div className="about__content">
        <ol type="a">
          {abt[0].about.description.map((it) => (
            <li key={it.descId}>{it.desc}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProjectAbout;
