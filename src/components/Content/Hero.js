import React from 'react'
import Link from 'gatsby-link'

const Hero = props => (
  <div>
    <h1>{props.title}</h1>
    <Link to="/work">View the work</Link>    
    <Link to="/about">About me</Link>
  </div>
)

export default Hero