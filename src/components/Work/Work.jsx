import React from 'react'

import './Work.css'
import Works from './Works'

const Work = () => {
  return (
    <section className="work section" id="projects">
        <h2 className="section_title">Projects</h2>
        <span className="section__subtitle">My projects</span>

        <Works />
    </section>
  )
}

export default Work