import React, { useState } from 'react';
import './../css/RegisterModal.css';
import './../css/Modal.css';
import LoginModal from './LoginModal';

const RegisterModal = (props) => {
    const [showLogin, setShowLogin] = useState(false);

    function handleShowLogin() {
        setShowLogin(true);
        props.onRegisterClose();
    }


    if (!props.showRegister) {
        return null;
    }

    return (
        <div className="modal" onClick={props.onClose}>
            {/* stopPropogation prevents clicks inside the content area from closing the modal.*/}
            <div className="modal-container" onClick={e => e.stopPropagation()}>
                {/* Button to close the modal */}
                <div className="modal-header">
                    <div className="modal-header-row">
                        <i className="fas fa-times hide"></i>
                        <h2 className="modal-title">Sign Up Form</h2>
                        {/* Bind the close button event */}
                        <i className="fas fa-times" id="close-modal" onClick={props.onRegisterClose}></i>
                    </div>
                    
                    <div className="form-toggle-container">
                        <button className="loginButton" onClick={handleShowLogin}>Login</button>
                        <button className="registerButton active-modal-btn">Register</button>
                    </div>
                </div>
                <div className="modal-body">
                    <label for="firstName">First Name</label>
                    <input className="inputField" type="text" placeholder="Enter your First Name" name="firstName" id="firstName" required/>

                    <label for="lastName">Last Name</label>
                    <input className="inputField" type="text" placeholder="Enter your Last Name" name="lastName" id="lastName" required/>

                    <label for="city">City</label>
                    <input className="inputField" type="text" placeholder="Enter your City" name="city" id="city" required/>                
                    
                    <label for="provinces">Province</label>
                    <select className="selectInput" id="provinces" name="provinces" required>
                        <option value="">Select a province</option>
                        <option value="AB">Alberta</option>
                        <option value="BC">British Columbia</option>
                        <option value="MB">Manitoba</option>
                        <option value="NB">New Brunswick</option>
                        <option value="NL">Newfoundland and Labrador</option>
                        <option value="NS">Nova Scotia</option>
                        <option value="NT">Northwest Territories</option>
                        <option value="NU">Nunavut</option>
                        <option value="ON">Ontario</option>
                        <option value="PE">Prince Edward Island</option>
                        <option value="QC">Quebec</option>
                        <option value="SK">Saskatchewan</option>
                        <option value="YT">Yukon</option>
                    </select>
                   
                    <label for="email">Email Address</label>
                    <input className="inputField" type="email" placeholder="Enter your Email Address" name="email" id="email" required/>

                    <label for="phone">Phone Number</label>
                    <input className="inputField" type="tel" placeholder="Enter your Phone Number" name="phone" id="phone" />

                    <label for="passworda">Password</label>
                    <input className="inputField" type="password" placeholder="Enter your password" name="passworda" id="passworda" required/>

                    <label for="passwordb">Confirm Password</label>
                    <input className="inputField" type="password" placeholder="Confirm your password" name="passwordb" id="passwordb" required/>

                    
                </div>
                <div className="modal-footer">
                    <button className="modal-footer-btn">Register</button>
                    <p className="modalInterlink">Alreay have an account? <span className="modal-context-link" onClick={() => setShowLogin(true)}>Login</span></p>
                </div>
            </div>
            <LoginModal onLoginClose={() => setShowLogin(false)} showLogin={showLogin} />
        </div>
    )
}

/* When a use clicks on 'login', it opens the Modal and passes 'login' to display the login form, vice versa for Register */


export default RegisterModal;

/* 




*/