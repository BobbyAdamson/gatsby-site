import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Content/Hero'
import ProjectLink from '../components/Content/ProjectLink'
import Testimonial from '../components/Content/Testimonial'

const IndexPage = () => (
  <div>
    <Hero />
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
        name: 'Jerod Barlow',
        title: 'Co-founder, Consilium Interactive'
      }}
      testimonial='It’s rare to find someone who can execute both design and digital strategy flawlessly like Mr. Adamson. He’ll exceed your expectations as he has mine time and time again.'
    />
  </div>
)

export default IndexPage