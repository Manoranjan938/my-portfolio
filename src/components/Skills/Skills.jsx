import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'

import './Skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
      <span className="section__subtitle">My technical skills</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills