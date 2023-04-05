import React, { useState } from 'react'

export default function Attendees() {
    const [reginaOpen, setReginaOpen] = useState();

    return (
        <React.Fragment>
        <div className="attendee-wrapper">
            <div className="label-row " onClick={() => setReginaOpen(!reginaOpen)}>
                <h3>Regina</h3>
                <div>
                    <span className="label-attendees">3<i class="fas fa-user-friends"></i></span>
                    <span className="label-dropdown"><i className={`${reginaOpen ? `fas fa-angle-up pplUp` : `fas fa-angle-down`}`}></i></span>
                </div>
            </div>{/* End City Heading*/}

            <ul className={`event-menu ${reginaOpen && `showReginaAttendeeMenu`}`}>
                <li>Janelle Ozwick, AM</li>
                <li>Peter David, AM</li>
                <li>Aaron Roberts, PM</li>
            </ul>{/* End Dropdown Menu */}
        </div>
        </React.Fragment>
    )
}
