import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesRectangle, faCircle } from '@fortawesome/free-regular-svg-icons';

function History(props) {
  return (
    <div className='hist-cont'>
        <div className='img-info'>
        <FontAwesomeIcon icon={faTimesRectangle} className='brandImg'/>
        <div className='info'>
            <h4>{props.Name}</h4>
            <p className='addr'>{props.Address}</p>
        </div>
        </div>
        <div className='purp'>
            <FontAwesomeIcon icon={faCircle} className='dot'/>
            <p>{props.purpose}</p>
        </div>
        <div>
            <h5>
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon icon={faCircle} />
        </h5>
        </div>
        <div className='am-du'>
            <h5>{props.pAmount}/</h5>
            <p className='dur'>{props.duration}</p>
        </div>
    </div>
  )
}

export default History