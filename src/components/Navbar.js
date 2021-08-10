
import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { useState} from 'react';
import {NavBarData} from './NavBarData'
import { IconContext } from 'react-icons';
import './Navbar.css'


const Navbar = () => {

    const [sidebar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sidebar);

    return (
   
            <IconContext.Provider value={{color:'#111'}}>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSideBar}/>
                </Link>  
            </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu '}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    <li className='nav-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>

                    {NavBarData.map((item, index)=>{
                        return (
                            <li key='index' className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}

                </ul>
            </nav>

            </IconContext.Provider>

       
    )
}

export default Navbar
