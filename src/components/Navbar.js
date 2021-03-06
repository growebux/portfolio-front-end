import React, {userState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] =  useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Creators 
                </Link>
                <div className="menu-icon">
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
