import React from 'react'
import './Navbar.css'
import bus from '../Assets/bus.png'
import list from '../Assets/list.png'
import home from '../Assets/home.png'
import route from '../Assets/route.png'
import messege from '../Assets/mes.png'
import complain from '../Assets/complaint.png'
import set from '../Assets/settings.png'
import { Link, useLocation, NavLink  } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  return (
    <div className='navbar'> 
    <div className="brand">
        <img src={bus} alt="" />
        <p>TravNav</p>
    </div>
    
        <ul>
           <Link to='/'><li ><img src={home} alt="" /></li></Link> 
           <NavLink to='/buses' ClassName="active"> <li ><img src={list} alt="" srcset="" /> </li> </NavLink>
            <li className="menu-items"><img src={route} alt="" /></li>
            {/* <li className="menu-items"><img src={messege} alt="" /></li> */}
            <li className="menu-items"><img src={complain} alt="" /></li>
            <li className="menu-items"><img src={set} alt="" /></li>
        </ul>
  
    </div>
  )
}

export default Navbar
