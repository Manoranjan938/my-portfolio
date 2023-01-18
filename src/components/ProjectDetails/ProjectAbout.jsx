import React from "react";

const ProjectAbout = () => {
  return (
    <section className="project__content__container">
      <h2 className="content__title">Project Management</h2>
      <div className="extras">
        <span className="status completed">Completed</span>
        <span className="project__type personal">Personal Project</span>
      </div>
      <div className="about__content">
        <ol type="a">
          <li>
            It has 5 modules. i.e - Admin, Employee, Partner, Household,
            Jobseeker.
          </li>
          <li>
            In admin module, admin can check the all users details, post the
            job, get the applied candidates for the specific job, search the
            candidate by location, education, job type and skills.
          </li>
          <li>
            Employee and Household module are the same, In this module user can
            only search the candidate by location, education, job type and
            skills.
          </li>
          <li>
            In jobseeker module, jobseeker only search for jobs and apply for
            that job.
          </li>
          <li>For UI i have used react js.</li>
          <li>I have used spring boot for developing the api’s.</li>
          <li>I have used PostgreSQL for database to store data.</li>
        </ol>
      </div>
    </section>
  );
};

export default ProjectAbout;
