import React from 'react'
import Link from 'gatsby-link'

const ProjectLink = props => (
  <div className={props.wrapper.class}>
    <Link to={`/work/${props.projectUrl}`}>
      <h2>{props.title}</h2>
      <p>{props.technologies.join(', ')}</p>
      <span>View project</span>
    </Link>
  </div>
)

export default ProjectLink