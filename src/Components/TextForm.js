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
    <div>
    <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label htmlFor="my-box" className="form-label">Example textarea</label> */}
  <textarea className="form-control" id="my-box" rows="8" value={text} onChange={uppercase} placeholder='put some value'></textarea>
</div>
<button className="btn btn-primary" onClick={HandleClick}>convert to uppercase</button>
    </div>
  )
}

export default TextForm