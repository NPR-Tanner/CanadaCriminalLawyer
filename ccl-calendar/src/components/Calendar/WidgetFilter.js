import React, { useState, useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function WidgetFilter() {
  const {filters, setFilters} = useContext(GlobalContext);
  //const [courtTypes, setCourtTypes] = useState(filters.court_type || ['Provincial Court', "Kings Bench"]);
  //const [cities, setCities] = useState(filters.cities || ['Regina']);

  const handleCourtTypeChange = (event) => {
    const { name, checked } = event.target;
    const court_type = filters.court_type;

    if (checked) {
      setFilters({...filters, court_type: [...court_type, name]});
      localStorage.setItem("filters", JSON.stringify(filters));
    } else {
      setFilters({...filters, court_type: court_type.filter((court) => court !== name)});
      localStorage.setItem("filters", JSON.stringify(filters));
    }
  };

  const handleCityChange = (event) => {
    const { name, checked } = event.target;
    const cities = filters.cities;
    if (checked) {
      setFilters({...filters, cities: [...cities, name]});
      localStorage.setItem("filters", JSON.stringify(filters));
    } else {
      setFilters({...filters, cities: cities.filter((city) => city !== name)});
      localStorage.setItem("filters", JSON.stringify(filters));
    }
  };

  return (
    <div className="widgetWrapper">
        <h2 className="widgetTitle">Filters</h2>

        <div className="input-row">
          <input type="checkbox" name="filterMyCourtDates" id="filterMyCourtDates" value="filterMyCourtDates"/>
          <label>Only display my court dates</label>
        </div>

        <label className="widgetLabel">Display Court Types</label>
        <ul>
          <li>
          <input 
            type="checkbox" 
            name="Provincial Court" 
            id="filterProvincialCourt" 
            value="filterProvincialCourt" 
            checked={filters.court_type && filters.court_type.includes('Provincial Court')}
            onChange={handleCourtTypeChange}
          />
            Provincial Court</li>
          <li>
            <input 
            type="checkbox" 
            name="Kings Bench" 
            id="filterKingsBench" 
            value="filterKingsBench" 
            checked={filters.court_type && filters.court_type.includes('Kings Bench')}
            onChange={handleCourtTypeChange}
          />
            Court of King's Bench</li>
          <li>
            <input 
            type="checkbox" 
            name="Appeal Court" 
            id="filterAppealCourt" 
            value="filterAppealCourt"
            onChange={handleCourtTypeChange}
          />
            Appeal Court</li>
        </ul>

        <label className="widgetLabel">Cities</label>
        <ul className="cityList">
          <li>
            <input 
              type="checkbox" 
              name="Estevan" 
              id="Estevan"
              value="Estevan"
            onChange={handleCityChange} 
            />
            Estevan
          </li>
          <li>
            <input 
              type="checkbox" 
              name="Kindersley" 
              id="Kindersley"
              value="Kindersley"
            onChange={handleCityChange} 
            />
            Kindersley
          </li>
          <li>
            <input 
              type="checkbox" 
              name="Melville" 
              id="Melville"
              value="Melville"
            onChange={handleCityChange} 
            />
            Melville
          </li>
          <li>
            <input 
              type="checkbox" 
              name="Moose Jaw" 
              id="Moose Jaw"
              value="Moose Jaw"
            onChange={handleCityChange} 
            />
            Moose Jaw
          </li>
          <li>
            <input 
              type="checkbox" 
              name="North Battlefords" 
              id="North Battlefords"
              value="North Battlefords"
            onChange={handleCityChange} 
            />
            North Battlefords
          </li>
          <li>
            <input 
              type="checkbox" 
              name="Prince Albert" 
              id="Prince Albert"
              value="Prince Albert"
            onChange={handleCityChange} 
            />
            Prince Albert
          </li>
          <li>
            <input 
              type="checkbox" 
              name="Regina" 
              id="Regina" 
              checked={filters.cities && filters.cities.includes('Regina')}
              value="Regina"
            onChange={handleCityChange}
            />
            Regina
          </li>
          <li>
            <input 
              type="checkbox" 
              name="Saskatoon" 
              id="Saskatoon"
              value="Saskatoon"
            onChange={handleCityChange} 
            />
            Saskatoon
          </li>
          <li>
            <input 
              type="checkbox" 
              name="Swift Current" 
              id="Swift Current"
              value="Swift Current"
            onChange={handleCityChange} 
            />
            Swift Current
          </li>
          <li>
            <input 
              type="checkbox" 
              name="Warman" 
              id="Warman"
              value="Warman"
            onChange={handleCityChange} 
            />
            Warman
          </li>
          <li>
            <input 
              type="checkbox" 
              name="Weyburn" 
              id="Weyburn"
              value="Weyburn"
            onChange={handleCityChange} 
            />
            Weyburn
          </li>
          <li>
            <input 
              type="checkbox" 
              name="Yorkton" 
              id="Yorkton"
              value="Yorkton"
            onChange={handleCityChange} 
            />
            Yorkton
          </li>
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