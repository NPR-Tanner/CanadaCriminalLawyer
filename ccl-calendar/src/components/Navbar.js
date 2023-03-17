import React from 'react';
import './../css/Navbar.css';
import TitleBar from './TitleBar';

// import { Link } from 'react-router-dom';

// Display the logo on the left
// Have two components for the right: mobile & desktop

const NavigationBar = () => {
    return (
      <nav>
        <TitleBar />
        {/* MobileNavigation */}
        {/* DesktopNavigation */}
      </nav>
       
    );
}

export default NavigationBar;