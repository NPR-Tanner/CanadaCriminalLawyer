import React, { useContext, useState } from "react";
import './../css/MobileNav.css';
import LogoMobile from './../assets/ccl-logo-mobilel.png'
import MobileDropdownMenu from "./MobileDropdownMenu";
import {faq, penaltiesAndSentencing, blog, criminalOffences, resources } from './Sitemap';
import GlobalContext from "../context/GlobalContext";

const MobileNavigation = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const {loggedIn} = useContext(GlobalContext);

    return (
        <div className="mobile-nav-container page-row">
            <a className="mobile-logo" href="https://canadacriminallawyer.ca">
                <img src={LogoMobile} className="mobile-nav-logo" alt="Canada Criminal Lawyer Mobile Logo" />
            </a>

            <div className={click ? "mobileContainer activeMobileContainer" : "mobileContainer"}> 
                <ul className={click ? "mobile-nav-menu activeMenu" : "mobile-nav-menu"}>
                    {/*<li className="navItem"><a className="nav-links" onClick={handleClick} href="https://canadacriminallawyer.ca">About</a></li>*/}
                    
                    <div className="mobile-dropdown-container" id="mobile-about">
                        <div className="mobile-parent-container">
                            <a className="mobile-parent-link" href="https://canadacriminallawyer.ca/about/"><button className="mobile-dropdown-btn">About</button></a>
                            <i className="fa fa-angle-down mobile-angle-down hidden-arrow"></i>
                        </div>
                    </div>

                    <li className="navItem"><MobileDropdownMenu parentText="FAQ" parentLink="https://canadacriminallawyer.ca/faq/" menuLinks={faq} submenu={penaltiesAndSentencing}/></li>
                    <li className="navItem"><MobileDropdownMenu parentText="Blog" parentLink="https://canadacriminallawyer.ca/blog" menuLinks={blog} /></li>
                    <li className="navItem"><MobileDropdownMenu parentText="Criminal Offences" parentLink="https://canadacriminallawyer.ca/criminal-offences" menuLinks={criminalOffences} /></li>
                    <li className="navItem"><MobileDropdownMenu parentText="Resources" parentLink="https://canadacriminallawyer.ca/resources" menuLinks={resources} /></li>
                </ul>
            </div>
            
            <div className="mobile-nav-icon mobile-nav-icon-row" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                {(loggedIn == false) ? (
                <React.Fragment>
                    <i class="fa fa-user-plus" aria-hidden="true" onClick={() => setShowRegister(true)}></i>
                    <i class="fa fa-sign-in" aria-hidden="true" onClick={() => setShowLogin(true)}></i>
                </React.Fragment>
            ) : (
                <i class="fa-solid fa-circle-user" onClick={() => setShowAccount(true)}></i>
            )}
            </div>
        </div>
    )
}

export default MobileNavigation