import React from "react";

const Social = () => {
  const handleRedirect = (type) => {
    if (type === "github") {
      window.location.href = "https://github.com/Manoranjan938";
    }
    if (type === "linkedin") {
      window.location.href = "https://www.linkedin.com/in/manoranjan-sahoo/";
    }
    if (type === "twitter") {
      window.location.href = "https://twitter.com/sagar_sahoo_";
    }
  };

  return (
    <div className="home__social">
      <div
        className="home_social-icon"
        onClick={() => handleRedirect("linkedin")}
      >
        <i className="uil uil-linkedin-alt"></i>
      </div>
      <div
        className="home_social-icon"
        onClick={() => handleRedirect("twitter")}
      >
        <i className="uil uil-twitter"></i>
      </div>
      <div
        className="home_social-icon"
        onClick={() => handleRedirect("github")}
      >
        <i className="uil uil-github-alt"></i>
      </div>
    </div>
  );
};

export default Social;
