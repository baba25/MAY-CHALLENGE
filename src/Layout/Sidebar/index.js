import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingBag, faPerson, faWallet, faChartArea, faMessage, faGear, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import './index.css'
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar-cont'>
      <div className='logo'>
        <h4>MARKET</h4>
      </div>
      <div className='menus'>
        <NavLink to='/' activeClassName='active' className='menu'>
          <FontAwesomeIcon icon={faShoppingBag} />
          <p>Dashboard</p>
        </NavLink>
        <NavLink to='/home' activeClassName='active' className='menu'>
          <FontAwesomeIcon icon={faHome} />
          <p>Home</p>
        </NavLink>
        <NavLink to='/home' activeClassName='active' className='menu'>
          <FontAwesomeIcon icon={faPerson} className='person' />
          <p>Account</p>
        </NavLink>
        <NavLink to='/home' activeClassName='active' className='menu'>
          <FontAwesomeIcon icon={faWallet} />
          <p>Wallet</p>
        </NavLink>
        <NavLink to='/home' activeClassName='active' className='menu'>
          <FontAwesomeIcon icon={faChartArea} />
          <p>Income</p>
        </NavLink>
        <NavLink to='/home' activeClassName='active' className='menu'>
          <FontAwesomeIcon icon={faMessage} />
          <p>Chat</p>
        </NavLink>
        <NavLink to='/home' activeClassName='active' className='menu'>
          <FontAwesomeIcon icon={faGear} />
          <p>Settings</p>
        </NavLink>
      </div>
      <div className='favourites'>
        <h4>Favourites</h4>
        <p>Red Whale Design</p>
        <p>Mobile App Design</p>
        <p>Dashboard Design</p>
      </div>
      <div className='bar-foot'>
        <FontAwesomeIcon icon={ faArrowAltCircleRight } />
      </div> 
    </div>
  )
}

export default Sidebar