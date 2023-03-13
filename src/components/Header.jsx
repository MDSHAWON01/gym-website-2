import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/main_header.png';


const Header = () => {
    return (
        <header className="main-header">
            <div className="container main-container">

                <div className="header-left">
                    <h4>#100DaysOfWorkOut</h4>
                    <h1>Join the legend of the fitness world</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione laudantium temporibus non placeat aspernatur amet, repudiandae autem quae nihil explicabo!</p>
                    <Link to='/plans' className='btn lg'>GET STARTED</Link>
                </div>

                <div className="header-right">
                    <div className="header-circle"></div>
                    <div className="header-img">
                        <img src={img} alt="" />
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;