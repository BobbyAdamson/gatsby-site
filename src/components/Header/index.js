import React from 'react'
import Link from 'gatsby-link'

import Nav from '../Nav'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <Link to="/">Bobby Adamson</Link>
    <Nav /> 
  </div>
)

export default Header
