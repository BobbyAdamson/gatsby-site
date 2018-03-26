import React from 'react'

const Testimonial = props => (
  <div className="testimonials">
    <blockquote>{props.testimonial}</blockquote>
    <div className="attribution">
      <img src={props.attribution.image} />
      <p><strong>{props.attribution.name}</strong></p>
      <p>{props.attribution.title}</p>
    </div>
  </div>
)

export default Testimonial