import {React} from 'react'
import './card.css'


function CardShower(props) {
  return (
    <div className='card-main'>
        <div className='card-header'>
            <h1 className='card-header-text'>{props.header}</h1>
        </div>
        <div className='card-body'>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default CardShower;