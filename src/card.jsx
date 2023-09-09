import React from 'react'
import './card.css'
const card = (props) => {
  return (
    <div className='card-main'>
        <div className='card-header'>
            <h1>{props.header}</h1>
        </div>
        <div className='card-body'>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default card