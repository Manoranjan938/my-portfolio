import React, { useState } from "react";

import "./qualification.css";

const Qualification = () => {
  const [toggleQualification, setToggleQualification] = useState(1);

  const handleToggleQualification = (ac) => {
    setToggleQualification(ac);
  };

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section__subtitle">My personal details</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleQualification === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => handleToggleQualification(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleQualification === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => handleToggleQualification(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleQualification === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B. Tech</h3>
                <span className="qualification__subtitle">
                  Modern Institute of Technology and Management, Bhubaneswar
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">+2 Science</h3>
                <span className="qualification__subtitle">Triveni Academy +2 Science College, Bhubaneswar</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2015
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10th</h3>
                <span className="qualification__subtitle">Municipal High School, Barbil</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2010 - 2013
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Something</h3>
                <span className="qualification__subtitle">Somewhere</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleQualification === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">FullStack Developer</h3>
                <span className="qualification__subtitle">Tanasvi Technologies Pvt. Ltd.</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Swipe Xplore</h3>
                <span className="qualification__subtitle">Frontend Developer</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2019 - 2021
                </div>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Something</h3>
                <span className="qualification__subtitle">Somewhere</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
