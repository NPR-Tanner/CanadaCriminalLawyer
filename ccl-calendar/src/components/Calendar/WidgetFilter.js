import React from 'react'

export default function WidgetFilter() {
  return (
    <div className="widgetWrapper">
        <h2 className="widgetTitle">Filters</h2>

        <div className="input-row">
          <input type="checkbox" name="filterMyCourtDates" id="filterMyCourtDates" value="filterMyCourtDates"/>
          <label>Only display my court dates</label>
        </div>

        <label className="widgetLabel">Display Court Types</label>
        <ul>
          <li><input type="checkbox" name="filterProvincialCourt" id="filterProvincialCourt" value="filterProvincialCourt"/>Provincial Court</li>
          <li><input type="checkbox" name="filterKingsBench" id="filterKingsBench" value="filterKingsBench"/>Court of King's Bench</li>
          <li><input type="checkbox" name="filterAppealCourt" id="filterAppealCourt" value="filterAppealCourt"/>Appeal Court</li>
        </ul>

        <label className="widgetLabel">Cities</label>
        <ul className="cityList">
          <li><input type="checkbox" name="Estevan" id="Estevan" />Estevan</li>
          <li><input type="checkbox" name="Kindersley" id="Kindersley" />Kindersley</li>
          <li><input type="checkbox" name="Melville" id="Melville" />Melville</li>
          <li><input type="checkbox" name="Moose Jaw" id="Moose Jaw" />Moose Jaw</li>
          <li><input type="checkbox" name="North Battlefords" id="North Battlefords" />North Battlefords</li>
          <li><input type="checkbox" name="Prince Albert" id="Prince Albert" />Prince Albert</li>
          <li><input type="checkbox" name="Regina" id="Regina" />Regina</li>
          <li><input type="checkbox" name="Saskatoon" id="Saskatoon" />Saskatoon</li>
          <li><input type="checkbox" name="Swift Current" id="Swift Current" />Swift Current</li>
          <li><input type="checkbox" name="Warman" id="Warman" />Warman</li>
          <li><input type="checkbox" name="Weyburn" id="Weyburn" />Weyburn</li>
          <li><input type="checkbox" name="Yorkton" id="Yorkton" />Yorkton</li>
        </ul>
    </div>
  )
}

/* Filters 
(Radio) Only show my court dates (checked by default)
--> When it's checked, you can still view court times on hover
(Checkbox) Select Cities
(Checkbox) Court Types: Provincial Court, Court of King's Bench, Appeal Court





*/