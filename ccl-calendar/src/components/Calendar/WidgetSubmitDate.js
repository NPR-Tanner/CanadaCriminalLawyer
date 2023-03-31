import React from 'react'
import './../../css/FilterWidget.css'

export default function WidgetSubmitDate() {
  return (
    <div className="widgetWrapper">
      <h2 className="widgetTitle">Add Court Date</h2>
      <form action="">
        <label htmlFor="cityDropdown" className="widgetLabel">Select City</label>
        <div className="input-row">
          <input className="widgetInput" type="text" placeholder="Saskatchewan" readOnly />
          <select className="widgetSelectInput" id="cityDropdown" name="cityDropdown" required>
            <option value="">Select a city</option>
            <option value="Estevan">Estevan</option>
            <option value="Kindersley">Kindersley</option>
            <option value="Melville">Melville</option>
            <option value="Moose Jaw">Moose Jaw</option>
            <option value="North Battlefords">North Battlefords</option>
            <option value="Prince Albert">Prince Albert</option>
            <option value="Regina">Regina</option>
            <option value="Saskatoon">Saskatoon</option>
            <option value="Swift Current">Swift Current</option>
            <option value="Warman">Warman</option>
            <option value="Weyburn">Weyburn</option>
            <option value="Yorkton">Yorkton</option>
        </select>

        </div>

        <label htmlFor="" className="widgetLabel">Select Date</label>
        <div className="input-row">
          {/* A datepicker would be very useful here. */}
          <input type="date" id="courtDate"/>
        </div>


        {/* Must Select a City to Interact with This; readOnly unless city is selected */}
        <label htmlFor="" className="widgetLabel">{`(Optional) Provide Court Information`}</label>
        <div className="input-row">
          {/* Provincial Court, Court of King's Bench */}
          <select className="widgetSelectInput" id="courtDropdown" name="courtDropdown" readOnly>
            <option value="">You must select a city</option>
          </select>
          {/* Only display when a city is selected*/}
          <select className="widgetSelectInput" id="courtRoomDropdown" name="courtRoomDropdown" readOnly>
            <option value="">You must select a court</option>
          </select>
        </div>

         {/* Must Select a City to Interact with This */}
         <label htmlFor="" className="widgetLabel">{`(Optional) Description`}</label>
          <div className="input-row">
            {/* Provincial Court, Court of King's Bench */}
            <textarea id="description" className="widgetInput" type="textarea" placeholder="This is a description that is only visible to you." />
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
