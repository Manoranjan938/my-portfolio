import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__image" />
      <h3 className="work__title">{item.name}</h3>
      <div className="btn-groups">
        <span className="small-button">Details</span>
        <span className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon" />
        </span>
      </div>
    </div>
  );
};

export default WorkItems;
