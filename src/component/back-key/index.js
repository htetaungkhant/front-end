import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';

import './back-key.css';

function BackKey() {
    return(
        <Navbar sticky="top" className="back-key">
            <Link to="/work?tags=all" className="back-label">
                <span className="back-text">Back to Work</span>
            </Link>
            <span className="right-button">Request a quote</span>
        </Navbar>
    );
}

export default BackKey;