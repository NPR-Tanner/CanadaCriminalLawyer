import React, { useState, useEffect } from 'react';
import RegisterModal from './RegisterModal';
import ForgotPasswordModal from './ForgotPasswordModal';
import './../css/Modal.css';

/* When a use clicks on 'login', it opens the Modal and passes 'login' to display the login form, vice versa for Register */
const LoginModal = (props) => {
    const [showRegister, setShowRegister] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    if (!props.showLogin) {
        return null;
    }
    
    /* Define State Variables 
    const [modalOpen] = useState(false);
    const [loginForm] = useState(false);
    const [registerForm] = useState(false);

    /* Assign Functions to Update State 
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);*/

    /* Define Handler Functions */

    return (
        <div className="modal" onClick={props.onClose}>
            {/* stopPropogation prevents clicks inside the content area from closing the modal.*/}
            <div className="modal-container" onClick={e => e.stopPropagation()}>
                {/* Button to close the modal */}
                
                <div className="modal-header">
                    <div className="modal-header-row">
                        <i className="fas fa-times hide"></i>
                        <h2 className="modal-title">Login Form</h2>
                        {/* Bind the close button event */}
                        <i className="fas fa-times" id="close-modal" onClick={props.onClose}></i>
                    </div>
                    
                    <div className="form-toggle-container">
                        <button className="loginButton active-modal-btn">Login</button>
                        <button className="registerButton" onClick={() => setShowRegister(true)}>Register</button>
                    </div>
                </div>
                <div className="modal-body">
                    <label for="email">Email Address</label>
                    <input type="email" name="email" className="inputField" placeholder='Please enter your email address' />
                    
                    <label for="email">Password</label>
                    <input type="password" name="password" className="inputField" placeholder='Please enter your password'/>
                    <p className="modal-context-link" onClick={() => setShowForgotPassword(true)}>Forgot your password?</p>
                </div>
                <div className="modal-footer">
                    <button className="modal-footer-btn">Login</button>
                    <p className="modalInterlink">Not a member?<span className="modal-context-link" onClick={() => setShowRegister(true)}> Signup now!</span></p>
                </div>
            </div>
            <RegisterModal onRegisterClose={() => setShowRegister(false)} showRegister={showRegister} />
            <ForgotPasswordModal onForgotPasswordClose={() => setShowForgotPassword(false)} showForgotPassword={showForgotPassword} />
        </div>
        
    )
}

export default LoginModal;

/* 




*/