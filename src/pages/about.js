import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Content/Hero'
import ProjectLink from '../components/Content/ProjectLink'
import Testimonial from '../components/Content/Testimonial'

const IndexPage = () => (
  <div>
    <Hero 
      title={`Hi, I'm Bobby.
      I'm a front-end engineer.`}
    />
    <div>
      <h2>My Story</h2>
      <p>I like computers.</p>
    </div>
    <Testimonial
      attribution={{
        image: '',
        name: 'Alex Basak',
        title: 'Copywriter'
      }}
      testimonial='His work is thoughtful. His skill is potent. He has my unconditional respect. People hire him because their time is valuable and they have a proven awareness for quality.'
    />
  </div>
)

export default IndexPage