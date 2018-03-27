import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Content/Hero'
import ProjectLink from '../components/Content/ProjectLink'
import Testimonial from '../components/Content/Testimonial'

const WorkPage = () => (
  <div>
    <div className="featured">
        <h1>Featured projects</h1>
        <p>A few things I've worked on.</p>
    </div>
    <div className="featured-projects">
      <ProjectLink 
        projectUrl='/local-va-loans'
        title="Veterans United Reviews"
        technologies={['Wireframe', 'Design', 'HTML', 'CSS', 'Javascript']}
        wrapper={{class: 'vu-reviews'}}
      />
      <ProjectLink 
        projectUrl='/local-va-loans'
        title="Veterans United Branch Overhaul"
        technologies={['Wireframe', 'Design', 'html', 'css', 'php', 'javascript']}
        wrapper={{class: 'local-va-loans'}}
      />
    </div>
    <Testimonial
      attribution={{
        image: '',
        name: 'Patrick Sasser',
        title: 'Web Development Consultant'
      }}
      testimonial='I have used Bobby extensively as a freelance graphic and web designer. He always produces top quality creative work under a strict deadline.'
    />
  </div>
)

export default WorkPage