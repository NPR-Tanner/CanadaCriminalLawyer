import React, { useState } from 'react'

export default function AddCourtTime() {
    const [reginaOpen, setReginaOpen] = useState(true);

  return (    
  <div className="attendee-wrapper">
  <div className="label-row" onClick={() => setReginaOpen(!reginaOpen)}>
      <h3>Regina</h3>
      <div>
          <span className="label-attendees">3<i class="fas fa-user-friends"></i></span>
          <span className="label-dropdown"><i className={`${reginaOpen ? `fas fa-angle-up pplUp` : `fas fa-angle-down`}`}></i></span>
      </div>
  
    </div>{/* End City Heading*/}

<ul className={`event-menu ${reginaOpen && `showReginaAttendeeMenu`}`}>
  <li className="event-subheader-wrapper">
      <div className="event-subheader-row">
          <h4>Provincial Court</h4>
          <i className={`${`reginaPC` ? `fas fa-angle-up pplUp` : `fas fa-angle-down`}`}></i>
      </div>
      <ul className={`addEvent-submenu ${`reginaPC` && `showReginaPC`}`}>
          <li>
              <div>
                  <h5>Courtroom 2</h5>
                  <p>9:30 AM</p>
                  <p>2:00 PM</p>
              </div>
          </li>
          <li>
              <div>
                  <h5>Courtroom 4</h5>
                  <p>9:30 AM</p>
              </div>
          </li>
          <li>
              <div>
                  <h5>Courtroom 11</h5>
                  <p>9:00 AM</p>
                  <p>1:30 PM</p>
              </div>
          </li>
      </ul>
      </li>
  <li className="event-subheader-wrapper">
      <div className="event-subheader-row">
          <h4>Court of King's Bench</h4>
          <i className={`${`reginaKB` ? `fas fa-angle-up pplUp` : `fas fa-angle-down`}`}></i>
      </div>
      <ul className={`addEvent-submenu ${`reginaKB` && `showReginaKB`}`}>
          <li>
              <div className="flex-col">
                  <h5>Courtroom 2</h5>
                  <p>9:30 AM</p>
                  <p>2:00 PM</p>
              </div>
          </li>
          <li>
              <div className="flex-col">
                  <h5>Courtroom 4</h5>
                  <p>9:30 AM</p>
              </div>
          </li>
          <li>
              <div className="flex-col">
                  <h5>Courtroom 11</h5>
                  <p>9:00 AM</p>
                  <p>1:30 PM</p>
              </div>
          </li>
      </ul>
      </li>
</ul>{/* End Dropdown Menu */}
</div>)
}
