import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProjectAbout from "./ProjectAbout";
import ProjectImageGallery from "./ProjectImageGallery";
import ProjectTechnology from "./ProjectTechnology";

const Details = () => {
  const [tab, setTab] = useState(1);
  let { search } = useLocation();

  const query = new URLSearchParams(search);
  const param = query.get("projectId");

  const handleActiveTab = (no) => {
    setTab(no);
  };

  return (
    <div className="details__container container">
      <div className="details__tabs">
        <span
          className={tab === 1 ? "tab active__tab" : "tab"}
          onClick={() => handleActiveTab(1)}
        >
          About
        </span>
        <span
          className={tab === 2 ? "tab active__tab" : "tab"}
          onClick={() => handleActiveTab(2)}
        >
          Image Gallery
        </span>
        <span
          className={tab === 3 ? "tab active__tab" : "tab"}
          onClick={() => handleActiveTab(3)}
        >
          Techologies
        </span>
        <span
          className={tab === 4 ? "tab active__tab" : "tab"}
          onClick={() => handleActiveTab(4)}
        >
          Extras
        </span>
      </div>
      {tab === 1 ? <ProjectAbout prId={param} /> : null}
      {tab === 2 ? <ProjectImageGallery /> : null}
      {tab === 3 ? <ProjectTechnology prId={param} /> : null}
    </div>
  );
};

export default Details;
