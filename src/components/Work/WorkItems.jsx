import React from "react";
import { Link } from "react-router-dom";

const WorkItems = ({ item }) => {

  const handleProjectRedirect = (url) => {
    window.location.href = url;
  }

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__image" />
      <h3 className="work__title">{item.name}</h3>
      <div className="btn-groups">
        <Link to={`/project/${item.id}`}>
          <span className="small-button">Details</span>
        </Link>
        <span className="work__button" onClick={() => handleProjectRedirect(item.url)}>
          Demo <i className="bx bx-right-arrow-alt work__button-icon" />
        </span>
      </div>
    </div>
  );
};

export default WorkItems;
