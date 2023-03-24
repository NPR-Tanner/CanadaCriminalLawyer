import React, { useState } from 'react';
import './../css/AccountModal.css';
import './../css/Modal.css';

const AccountModal = (props) => {
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
                            <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
                        </div>
                    </div>

                    <div className="account-row">
                        <label for="lastName">Last Name</label>
                        <div className="input-container">
                            <input className="inputField" type="text" placeholder="Last Name" name="lastName" id="lastName" readonly/>
                            <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
                        </div>
                    </div>

                    <div className="account-row">
                        <label for="city">City</label>
                        <div className="input-container">
                            <input className="inputField" type="text" placeholder="City" name="city" id="city" readonly/>
                            <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
                        </div>
                    </div>

                    <div className="account-row">
                        <label for="province">Province</label>
                        <div className="input-container">
                            <input className="inputField" type="text" placeholder="Province" name="province" id="province" readonly/>
                            <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
                        </div>
                    </div>

                    <div className="account-row">
                        <label for="email">Email Address</label>
                        <div className="input-container">
                            <input className="inputField" type="email" placeholder="Email Address" name="email" id="email" readonly/>
                            <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
                        </div>
                    </div>

                    <div className="account-row">
                        <label for="phone">Phone Number</label>
                        <div className="input-container">
                            <input className="inputField" type="tel" placeholder="Phone Number" name="phone" id="phone" readonly/>
                            <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
                        </div>
                    </div>

                    <div className="account-row">
                        <label for="passworda">Password</label>
                        <div className="input-container">
                            <input className="inputField" type="password" placeholder="Password" name="passworda" id="passworda" readonly/>
                            <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
                        </div>
                    </div>

                    <div className="account-row">
                        <label for="passwordb">Confirm Password</label>
                        <div className="input-container">
                            <input className="inputField" type="password" placeholder="Password" name="passwordb" id="passwordb" readonly/>
                            <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="modal-footer-btn">Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default AccountModal;