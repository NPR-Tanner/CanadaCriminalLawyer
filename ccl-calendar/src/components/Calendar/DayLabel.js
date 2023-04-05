import React, { useState, useContext } from 'react';
import '../../css/DayLabel.css';
import GlobalContext from '../../context/GlobalContext';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

/* Data Required:
    -- City
    -- AM vs PM
    -- # of people in court that day
    -- Array of people to list

    Apply background color to Regina
*/

export default function DayLabel() {
    const [labelOpen, setLabelOpen] = useState(false);
    const {screenSize} = useContext(GlobalContext);
    
    function handleClick(event) {
        event.stopPropagation();
        setLabelOpen(!labelOpen);
    }

    return (
    <div className="label-wrapper">
        <div className="label-row regina" onClick={screenSize == 'small' ? () => setLabelOpen(!labelOpen) : handleClick}>
            <div ><p>Regina, AM</p></div>
            <div>
                <span className="label-attendees">3<i class="fas fa-user-friends"></i></span>
                {screenSize !== 'small' && (
                    <span className="label-dropdown">
                        <i className={`${labelOpen ? `fas fa-angle-up pplUp` : `fas fa-angle-down`}`}></i>
                    </span>
                )}
                
            </div>
        </div>

        {screenSize !== 'small' && (
            <ul className={`label-menu ${labelOpen && `showLabelMenu`}`}>
                <li>Janelle Ozwick, AM</li>
                <li>Peter David, AM</li>
                <li>Aaron Roberts, PM</li>
            </ul>
        )}

        
    </div>
  )
}
