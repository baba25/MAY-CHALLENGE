import './index.css';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom'
import Home from '../Components/Home';
function Layout() {
  return (
    <div className='container'>
        <Outlet />
        <Sidebar />
        <Home />
    </div>
  )
}

export default Layout