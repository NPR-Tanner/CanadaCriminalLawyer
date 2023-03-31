import React, { useState } from 'react';
import './../css/AccountModal.css';
import './../css/Modal.css';

const AccountModal = (props) => {
    const [firstNameEditMode, setFirstNameEditMode] = useState(false);
    const [lastNameEditMode, setLastNameEditMode] = useState(false);
    const [cityEditMode, setCityEditMode] = useState(false);
    const [provinceEditMode, setProvinceEditMode] = useState(false);
    const [emailEditMode, setEmailEditMode] = useState(false);
    const [phoneEditMode, setPhoneEditMode] = useState(false);
    const [passwordEditMode, setPasswordEditMode] = useState(false);

    if (!props.showAccount) {
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
                        <h2 className="modal-title">Account Information</h2>
                        {/* Bind the close button event */}
                        <i className="fas fa-times" id="close-modal" onClick={props.onClose}></i>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="account-row">
                        <label for="firstName">First Name</label>
                        <div className="input-container">
                            <input className="inputField" type="text" placeholder="First Name" name="firstName" id="firstName" readonly/>
                            {firstNameEditMode == false ? (
                                <button className="pencilBtn" onClick={() => setFirstNameEditMode(true)}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            ) : (
                                <React.Fragment>
                                    <button className="pencilBtn" onClick={() => setFirstNameEditMode(false)}><i className="fas fa-times cancelEdit" ></i></button>
                                    <button className="pencilBtn"><span className="fas fa-check"></span></button>
                                </React.Fragment>
                            )}
                        </div>
                    </div>

                    <div className="account-row">
                        <label for="lastName">Last Name</label>
                        <div className="input-container">
                            <input className="inputField" type="text" placeholder="Last Name" name="lastName" id="lastName" readonly/>
                            
                            {lastNameEditMode == false ? (
                                <button className="pencilBtn" onClick={() => setLastNameEditMode(true)}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            ) : (
                                <React.Fragment>
                                    <button className="pencilBtn" onClick={() => setLastNameEditMode(false)}><i className="fas fa-times cancelEdit" ></i></button>
                                    <button className="pencilBtn"><span className="fas fa-check"></span></button>
                                </React.Fragment>
                            )}
                        </div>
                    </div>

                    <div className="account-row">
                        <label for="city">City</label>
                        <div className="input-container">
                            <input className="inputField" type="text" placeholder="City" name="city" id="city" readonly/>
                            {cityEditMode == false ? (
                                <button className="pencilBtn" onClick={() => setCityEditMode(true)}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            ) : (
                                <React.Fragment>
                                    <button className="pencilBtn" onClick={() => setCityEditMode(false)}><i className="fas fa-times cancelEdit" ></i></button>
                                    <button className="pencilBtn"><span className="fas fa-check"></span></button>
                                </React.Fragment>
                            )}
                        </div>
                    </div>

                    <div className="account-row">
                        <label for="provinces">Province</label>
                        <div className="input-container">
                            <select className="selectInput" id="provinces" name="provinces">
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
                            {provinceEditMode == false ? (
                                <button className="pencilBtn" onClick={() => setProvinceEditMode(true)}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            ) : (
                                <React.Fragment>
                                    <button className="pencilBtn" onClick={() => setProvinceEditMode(false)}><i className="fas fa-times cancelEdit" ></i></button>
                                    <button className="pencilBtn"><span className="fas fa-check"></span></button>
                                </React.Fragment>
                            )}
                        </div>
                    </div>

                    <div className="account-row">
                        <label for="email">Email Address</label>
                        <div className="input-container">
                            <input className="inputField" type="email" placeholder="Email Address" name="email" id="email" readonly/>
                            {emailEditMode == false ? (
                                <button className="pencilBtn" onClick={() => setEmailEditMode(true)}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            ) : (
                                <React.Fragment>
                                    <button className="pencilBtn" onClick={() => setEmailEditMode(false)}><i className="fas fa-times cancelEdit" ></i></button>
                                    <button className="pencilBtn"><span className="fas fa-check"></span></button>
                                </React.Fragment>
                            )}
                        </div>
                    </div>

                    <div className="account-row">
                        <label for="phone">Phone Number</label>
                        <div className="input-container">
                            <input className="inputField" type="tel" placeholder="Phone Number" name="phone" id="phone" readonly/>
                            {phoneEditMode == false ? (
                                <button className="pencilBtn" onClick={() => setPhoneEditMode(true)}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            ) : (
                                <React.Fragment>
                                    <button className="pencilBtn" onClick={() => setPhoneEditMode(false)}><i className="fas fa-times cancelEdit" ></i></button>
                                    <button className="pencilBtn"><span className="fas fa-check"></span></button>
                                </React.Fragment>
                            )}
                        </div>
                    </div>

                    <div className="account-row">
                        <label for="passworda">{passwordEditMode == false ? `Password` : `New Password`}</label>
                        <div className="input-container">
                            <input className="inputField" type="password" placeholder="Password" name="passworda" id="passworda" readonly/>
                            {passwordEditMode == false && (
                                <button className="pencilBtn" onClick={() => setPasswordEditMode(true)}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            )}
                        </div>
                    </div>
                    
                    {passwordEditMode && (
                        <div className="account-row">
                            <label for="passwordb">Confirm</label> {/* The string length displaces items*/}
                            <div className="input-container">
                                <input className="inputField" type="password" placeholder="Password" name="passwordb" id="passwordb" readonly/>
                                <button className="pencilBtn" onClick={() => setPasswordEditMode(false)}><i className="fas fa-times cancelEdit" ></i></button>
                                <button className="pencilBtn"><span className="fas fa-check"></span></button>
                            </div>
                        </div>
                    )}
                    
                </div>
                <div className="modal-footer">
                    <button className="modal-footer-btn">Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default AccountModal;