import React from 'react'
import './../../css/FilterWidget.css'

export default function WidgetSubmitDate() {
  return (
    <div className="widgetWrapper">
      <h2 className="widgetTitle">Add Court Date</h2>
      <form action="">
        <label htmlFor="" className="widgetLabel">Select City</label>
        <div className="input-row">
          <input className="widgetInput" type="text" placeholder="Saskatchewan" readonly />
          <input className="widgetInput" type="text" placeholder="City" />
        </div>

        <label htmlFor="" className="widgetLabel">Select Date</label>
        <div className="input-row">
          {/* A datepicker would be very useful here. */}
          <input className="mywidgetInput" type="text" placeholder="Month" />
          <input className="mywidgetInput" type="text" placeholder="Day" />
          <input className="mywidgetInput" type="text" placeholder="Year" />
        </div>


        {/* Must Select a City to Interact with This */}
        <label htmlFor="" className="widgetLabel">{`(Optional) Provide Court Information`}</label>
        <div className="input-row">
          {/* Provincial Court, Court of King's Bench */}
          <input className="widgetInput" type="text" placeholder="Court" />
          <input className="widgetInput" type="text" placeholder="Room" />
        </div>
      </form>

      <h3>Court Times</h3>
    </div>
  )
}

/* Functional Guidelines 
  1. User selects a city from the dropdown menu
  2. User selects a valid date
  --> When a valid date is selected, pull data from MongoDB and render it below 'Court Dates'
  3. When a user selects either a court or a courtroom, it filters the data
 
  Rendered Data:
  4. <p>
      <span>{City} {Court Abbreviation} #{Courtroom number} {Time} {Date}</span>
      <span>{People} {RSVP Button}</span>
     </p>
  5. Clicking on the people icon should let me see all the people in court at that time
  6. Clicking the RSVP Button should add the current user to that event IF they are not already currently RSVP'd

*/
