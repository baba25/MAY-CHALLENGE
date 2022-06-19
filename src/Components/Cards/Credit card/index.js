import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesRectangle, faArrowAltCircleDown,faCircle } from '@fortawesome/free-regular-svg-icons';

function CCard(props) {
  return (
    <div className='cc-cont'>
        <div className='c1'>
            <FontAwesomeIcon icon={faTimesRectangle} className='gold'/>
            <FontAwesomeIcon icon={faArrowAltCircleDown} />
        </div>
        <div className='c2'><h4 className='cno'>{props.CNo}</h4></div>
        <div className='c3'>
            <div className='lets'>
                <p className='iden'>CARD_</p>
                <h4 className='ccn'>{props.CName}</h4>
            </div>
            <div>
                <FontAwesomeIcon icon={faCircle} />
                <p className='mc'>Master Card</p>
            </div>
        </div>
    </div>
  )
}

export default CCard