import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRectangleList} from '@fortawesome/free-solid-svg-icons';
import './index.css';

function Ecard(props) {
  return (
    <div className='ecard-cont'>
        <FontAwesomeIcon icon={faRectangleList} className='ref-img'/>
        <p className='earning'>{props.timeEarning}</p>
        <p className='plartform'>{props.plartform}</p>
        <p className='amount'>{props.amount}</p>
    </div>
  )
}

export default Ecard