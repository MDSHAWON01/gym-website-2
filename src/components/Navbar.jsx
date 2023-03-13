import React, { useState } from 'react';
import './Navbar.css';
import logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
    const [navShow, setNavShow] = useState(false)
    return (
        <nav>
            <div className="container nav-container">

                <Link to='/' >
                    <img src={logo} alt="Nav Logo" className="logo" onClick={() => setNavShow(false)} />
                </Link>

                <ul className={`nav-links ${navShow ? 'show-nav' : 'hide-nav'}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setNavShow(prev => !prev)} >{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>

                <button className="nav-toggleBtn" onClick={() => setNavShow(prev => !prev)}>
                    {
                        navShow ? <MdOutlineClose /> : <GoThreeBars />
                    }
                </button>


            </div>
        </nav>
    );
};

export default Navbar;