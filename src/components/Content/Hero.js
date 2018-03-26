import React from 'react'
import Link from 'gatsby-link'

const Hero = () => (
  <div>
    <h1>Hi, I'm Bobby.<br />
        I'm a front-end engineer, among other things.</h1>
    <Link to="/work">View the work</Link>    
    <Link to="/about">About me</Link>
  </div>
)

export default Hero