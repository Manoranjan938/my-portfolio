import { techData } from "components/Work/data/techData";
import React from "react";

const ProjectTechnology = ({ prId }) => {
 const tc = techData.filter(item => item.projectId == prId ? item : null)
  return (
    <section className="project__content__container">
      <h2>Technologies</h2>
      <div className="project__links">
        <button className="small-button">Check Code</button>
      </div>
      <div className="tech__content">
        <p className="tech__titles">
          <span>Frontend:</span> {tc[0].technologies.map(it => (
            it.title === "frontend" ? it.technology : null
          ))}
        </p>
        <p className="tech__titles">
          <span>Backend:</span> {tc[0].technologies.map(it => (
            it.title === "backend" ? it.technology : null
          ))}
        </p>
        <p className="tech__titles">
          <span>Database:</span> {tc[0].technologies.map(it => (
            it.title === "database" ? it.technology : null
          ))}
        </p>
        <p className="tech__titles">
          <span>Extra:</span> {tc[0].technologies.map(it => (
            it.title === "extra" ? it.technology : null
          ))}
        </p>
      </div>
    </section>
  );
};

export default ProjectTechnology;
