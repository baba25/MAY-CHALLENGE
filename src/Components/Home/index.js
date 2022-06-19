import React from 'react'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import Ecard from '../Cards/Earnings-ref card';
import Inex from '../Cards/In-Ex card';
import History from '../History UI';
import Graph from '../Graph';
import CCard from '../Cards/Credit card';

function Home() {
  return (
    <div className='dash-cont'>
        <div className='header-cont'>
            <div className='h-text'>
                <h2>Digital Marketplace</h2>
                <p>Welcome Ahmad</p>
            </div>
            <div className='h-btn'>
            <FontAwesomeIcon icon={faSearch} className='search'/>
            <FontAwesomeIcon icon={faBell} className='bell'/>
            <button className='add-btn'><FontAwesomeIcon icon={faPlus} />Add New    </button>
            </div>
        </div>
        <div className='cards'>
            <Ecard 
            timeEarning="1 week"
            plartform="upwork earning"
            amount="+$4,087"
            />
            <Ecard 
            timeEarning="paypal"
            plartform="monthly payment"
            amount="$300"
            />
            <Inex 
            amountInex="$7678.470"
            graphCal="34%"
            />
        </div>
        <div className='head-cont'>
            <div className='h-text'>
                <h2>Project Sales</h2>
                <p className='second'>Welcome to CRM Dashboard</p>
            </div>
            <div className='h-btn'>
            <button className='addPro-btn'><FontAwesomeIcon icon={faPlus} />Add Widget    </button>
            </div>
        </div> 
        <div className='g-cont'>
            <Graph />
            <div className='shad'>
                <CCard 
                CNo="2234  7843  3452  2341"
                CName="Ahmad"
                />
                <div className='d1'></div>
                <div className='d2'></div>
            </div>
        </div>
        <div>
        <History 
        Name="White city vill"
        Address="No 3 Thormbridge, 54 mall"
        purpose="for rent"
        pAmount="$5,567"
        duration="1 week"
        /> 
        <History 
        Name="White city vill"
        Address="No 3 Thormbridge, 54 mall"
        purpose="for rent"
        pAmount="$5,567"
        duration="1 week"
        /> 
        </div>
    </div>
  )
}

export default Home