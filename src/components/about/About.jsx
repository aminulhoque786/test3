import React from 'react'
import "./about.css"

import { useSelector } from 'react-redux'

const About = () => {
    let data = useSelector((state)=> state.product.value)
  return (
           <div className="fuh">

           <button>  <h2>About part {data}</h2></button>
           </div>

  )
}

export default About