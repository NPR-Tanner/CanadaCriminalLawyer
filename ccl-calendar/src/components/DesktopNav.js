import React, { useState } from 'react';
import './../css/DesktopNav.css';
import DesktopLogo from './../assets/ccl-logo.png';
import DropdownMenu from './DropdownMenu';
import {faq, penaltiesAndSentencing, blog, criminalOffences, resources } from './Sitemap';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import ForgotPasswordModal from './ForgotPasswordModal';
import AccountModal from './AccountModal';


const DesktopNavigation = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showAccount, setShowAccount] = useState(false);

    return (
        <section id="desktopNavContainer" className="page-row">
            <a href="https://canadacriminallawyer.ca">
                <img className="desktop-logo" src={DesktopLogo} alt="Canada Criminal Lawyer Logo" width="150px"/>
            </a>
            
            <div className="menuContainer">
                <ul id="desktopMenu">
                    <li><a className="desktop-nav-link" href="https://canadacriminallawyer.ca/about/"><button className="dropdown-btn">About</button></a></li>
                   
                    <li><DropdownMenu parentText="FAQ" parentLink="https://canadacriminallawyer.ca/faq/" menuLinks={faq} submenu={penaltiesAndSentencing}/></li>
                    <li><DropdownMenu parentText="Blog & Media" parentLink="https://canadacriminallawyer.ca/blog/" menuLinks={blog} subMenu={penaltiesAndSentencing}/></li>
                    <li><DropdownMenu parentText="Criminal Offences" parentLink="https://canadacriminallawyer.ca/criminal-offences/" menuLinks={criminalOffences} /></li>
                    <li><DropdownMenu parentText="Resources" parentLink="https://canadacriminallawyer.ca/legal-resources/" menuLinks={resources} /></li>
                    
                    {/* Login/Register -- REQUIRE PROPER ROUTING/CLICK HANDLING */}
                    <li><i class="fa fa-user-plus" aria-hidden="true" onClick={() => setShowRegister(true)}></i></li>
                    <li><i class="fa fa-sign-in" aria-hidden="true" onClick={() => setShowLogin(true)}></i></li>

                    {/* Profile Icon */}
                    <li><i class="fa-solid fa-circle-user" onClick={() => setShowAccount(true)}></i></li>
                </ul>
            </div>
            
            {/* Pass in a function to update the state*/}
            <LoginModal onClose={() => setShowLogin(false)} showLogin={showLogin} />
            <RegisterModal onRegisterClose={() => setShowRegister(false)} showRegister={showRegister} />
            <ForgotPasswordModal onClose={() => setShowForgotPassword(false)} showForgotPassword={showForgotPassword} />
            <AccountModal onClose={() => setShowAccount(false)} showAccount={showAccount}/>
        </section>
    )
}

export default DesktopNavigation;