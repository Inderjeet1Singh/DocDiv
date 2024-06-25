import React from 'react'
const Hero = ({title,imageUrl}) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
        "Discover personalized care at DocDiv.
         We tailor our treatments to fit your unique needs and lifestyle. 
         Experience the difference that individualized attention can make."
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt ="hero" className = "animated-image"/>
      </div>
    </div>
  )
}
export default Hero
