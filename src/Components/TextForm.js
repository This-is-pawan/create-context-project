import React, { useState } from 'react'

const TextForm = (props) => {
  const [text,setText]=useState('')
  const HandleClick=(e)=>{

 setText(text.toUpperCase())
    
  }
  const uppercase=(e)=>{
setText(e.target.value)
  }
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label htmlFor="my-box" className="form-label">Example textarea</label> */}
  <textarea className="form-control" id="my-box" rows="8" value={text} onChange={uppercase} placeholder='put some value'></textarea>
</div>
<button className="btn btn-primary" onClick={HandleClick}>Convert to uppercase</button>
    </div>
    <div className="cotainer my-3">
  
      <h1>your text summary </h1>
       <p>{text.split(' ').filter((word) => word.length > 0).length} words and {text.length} characters</p>
       <p>{ 0.008 * text.split(' ').length} Mintues read </p>
    </div>
    </>
  )
}

export default TextForm
