import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import './index.css'

function Inex(props) {
  return (
    <div className='Inex-cont'>
        <div className='card1'>
        <div className='refInex-top'>
            <div className='top_text'>
                <p>income</p>
                <h4>{props.amountInex}</h4>
            </div>
            <div className='top_avatar'>
                <FontAwesomeIcon icon={faCircle} className='refInex-img'/>
                <FontAwesomeIcon icon={faCircle} className='refInex-img'/>
                <FontAwesomeIcon icon={faCircle} className='refInex-img'/>
            </div>
        </div>
        <div className='refInex-graph'>
            <div className='graph-cont'>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
                <div className='bar4'></div>
                <div className='bar5'></div>
                <div className='bar6'></div>
                <div className='bar7'></div>
            </div>
            <div className='graph-side'>
            <FontAwesomeIcon icon={faArrowAltCircleUp} className='refInex-arrow'/>
            <p>{props.graphCal}</p>
            </div>
        </div>
        </div>
        <div className='card2'>
        <div className='refInex-top'>
            <div className='top_text'>
                <p>expenses</p>
                <h4>{props.amountInex}</h4>
            </div>
            <div className='top_avatar'>
                <FontAwesomeIcon icon={faCircle} className='refInex-img'/>
                <FontAwesomeIcon icon={faCircle} className='refInex-img'/>
                <FontAwesomeIcon icon={faCircle} className='refInex-img'/>
            </div>
        </div>
        <div className='refInex-graph'>
            <div className='graph-cont'>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
                <div className='bar4'></div>
                <div className='bar5'></div>
                <div className='bar6'></div>
                <div className='bar7'></div>
            </div>
            <div className='graph-side'>
            <FontAwesomeIcon icon={faArrowAltCircleUp} className='refInex-arrow'/>
            <p>{props.graphCal}</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Inex