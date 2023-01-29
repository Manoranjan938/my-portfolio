import Footer from "components/Footer/Footer";
import Details from "components/ProjectDetails/Details";
import ProjectHeader from "components/ProjectDetails/ProjectHeader";
import ScrollUp from "components/ScrollUp/ScrollUp";
import React from "react";

const ProjectDetails = () => {
  return (
    <>
      <ProjectHeader />
      <Details />
      <Footer />
      <ScrollUp />
    </>
  );
};

export default ProjectDetails;
