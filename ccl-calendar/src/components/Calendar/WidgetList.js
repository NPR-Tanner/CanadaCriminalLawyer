import React from 'react'

export default function WidgetList() {
  return (
    <div className="widgetWrapper">
        {/* Sort functionality to include: Chronological, by City, Court Type*/}
        <h2 className="widgetTitle">Your Court Dates</h2>
        <p>Regina PC #1 10:30 AM, March 31/22</p>{/* Icons: People, Delete, View More Details */}
        <p>City, Court, Courtroom #, Time, Date ~ icons</p>
    </div>
  )
}
