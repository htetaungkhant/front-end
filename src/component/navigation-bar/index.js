import React, { createRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';

import './navbar.css';

import color from '../../config/colors';

function Navigationbar({ theme, image, activeStatus }) {

    const logoContainer = createRef();
    const mobileNavContainer = createRef();
    const mobileNavItemContainer = createRef();

    const [isOpen, setOpenStatus] = useState(false);

    const toggleMobileNav = () => {
        if(isOpen){
            logoContainer.current.style.display = 'flex';
            mobileNavContainer.current.style.backgroundColor = null;
            mobileNavContainer.current.style.width = null;
            mobileNavItemContainer.current.style.display = null;

            setOpenStatus(false);
        }
        else{
            logoContainer.current.style.display = 'none';
            mobileNavContainer.current.style.backgroundColor = '#3a2837';
            mobileNavContainer.current.style.width = '100%';
            mobileNavItemContainer.current.style.display = 'flex';

            setOpenStatus(true);
        }
    }

    return (
        <Navbar sticky="top" className="navbar" style={ theme === 'red' ? {backgroundColor: color.red} : {backgroundColor: color.white}}>
            <Link to="/" className="logoContainer" ref={logoContainer}>
                <img className="logoImage" src={image} alt="Logo" />
            </Link>
            <div className="mobileNavContainer" ref={mobileNavContainer}>
                <div className="navIconContainer">
                    <div className="navIcon" onClick={toggleMobileNav}>
                        <div className="whiteLineContainer">
                            <div className="whiteLine"></div>
                            <div className="whiteLine"></div>
                            <div className="whiteLine"></div>
                        </div>
                            
                    </div>
                </div>
                <ul className="mobileNavItemContainer" ref={mobileNavItemContainer}>
                    <li className="mobileNavItem">Work</li>
                    <li className="mobileNavItem">Solutions</li>
                    <li className="mobileNavItem">Services</li>
                    <li className="mobileNavItem">About us</li>
                    <li className="mobileNavItem">Blog</li>
                    <li className="mobileNavItem">Request a quote</li>
                    <li className="mobileNavItem">Let's Chat</li>
                </ul>
            </div>
            <div className="navigationContainer">
                <ul className="navItemContainer">
                    <Link to="/work" className={ theme === 'red' ? "whitenavitem" : "navitem"} style={ activeStatus === 'work' ? styles.fontBold : null }><li>Work</li></Link>
                    <Link to="/solutions" className={ theme === 'red' ? "whitenavitem" : "navitem"} style={ activeStatus === 'solutions' ? styles.fontBold : null }><li>Solutions</li></Link>
                    <Link to="/services" className={ theme === 'red' ? "whitenavitem" : "navitem"} style={ activeStatus === 'services' ? styles.fontBold : null }><li>Services</li></Link>
                    <Link to="/about-us" className={ theme === 'red' ? "whitenavitem" : "navitem"} style={ activeStatus === 'aboutus' ? styles.fontBold : null }><li>About us</li></Link>
                    <Link to="/blog" className={ theme === 'red' ? "whitenavitem" : "navitem"} style={ activeStatus === 'blog' ? styles.fontBold : null }><li>Blog</li></Link>
                    <li className="specialnavitem">Request a quote</li>
                </ul>
            </div>
        </Navbar>
    );
}

const styles = {
    fontBold : {
        fontWeight: 'bold'
    }
};

export default Navigationbar;