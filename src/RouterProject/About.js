import React from 'react'

import AboutIcon from '../RouterProject/About.svg';
const About = () => {
  return (
    <>
   <div className="about">
    <h1>About--page</h1>
    <div className="image">
    <img src={AboutIcon} alt="aobut" className='img'/>
<p className='my-4 text-md-start pra'>About dolor, sit amet consectetur adipisicing elit. Ipsa nam nostrum at. Facere aperiam exercitationem, quia delectus blanditiis vel necessitatibus voluptatem eligendi in minus, accusamus hic, culpa rem nisi! Esse?Home dolor, sit amet consectetur adipisicing elit. Ipsa nam nostrum at. Facere aperiam exercitationem, quia delectus blanditiis vel necessitatibus voluptatem eligendi in minus, accusamus hic, culpa rem nisi! Esse?</p>
    </div>
   </div>
    </>
  )
}

export default About