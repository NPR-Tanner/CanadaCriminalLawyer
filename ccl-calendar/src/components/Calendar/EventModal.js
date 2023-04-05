import React, { useContext, useState } from 'react'
import GlobalContext from '../../context/GlobalContext'
import AddCourtTime from './AddCourtTime'
import Attendees from './Attendees'
import './../../css/Calendar.css'

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function EventModal() {
    const {setShowEventModal, daySelected} = useContext(GlobalContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("");
    const [selectedLabel, setSelectedLabel] = useState(labelsClasses[0]);
    const [eventView, setView] = useState("attendees"); //attendees
    let componentToDisplay;

    switch(eventView) {
        case "attendees":
            componentToDisplay = <Attendees />;
            break;
        case "addCourtTime":
            componentToDisplay = <AddCourtTime />;
            break;
        default:
            componentToDisplay = <Attendees />;
    }

  return (
    <div onClick={() => setShowEventModal(false)} className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">{/* Overlay */}
        <form onClick={e => e.stopPropagation()} className="bg-white rounded-lg shadow-2xl event-w">
            <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                <h3>{daySelected.format("dddd, MMMM DD")}</h3>
                <button onClick={() => setShowEventModal(false)}>
                    <span className="material-icons-outlined text-gray-400">
                        close
                    </span>
                </button>
            </header>

            <div className="event-toggle-container">
                <button 
                    onClick={() => setView("attendees")} 
                    className={`attendees-btn ${eventView == `attendees` && `active-event-modal-btn`}`}
                >Attendees</button>
                <button 
                    onClick={() => setView("addCourtTime")} 
                    className={`addCourtTime-btn ${eventView == `addTime` && `active-event-modal-btn`}`}
                >Add Court Time</button>
            </div>

            <div className="event-modal-body">
               {componentToDisplay}
            </div>
            
            <footer className="flex justify-end p-3 mt-5">
                <button type="submit" className="bg-blue-500 eventSubmit hover:bg-blue-600 px-6 py-2 rounded text-white">
                    Save
                </button>
            </footer>
        </form>
    </div>
  )
}
                    

{/* 

    <div className="attendee-wrapper">
        <div className="label-row" onClick={() => setSaskatoonOpen(true)}>
            <h3>Saskatoon</h3>
            <div>
                <span className="label-attendees">5<i class="fas fa-user-friends"></i></span>
                <span className="label-dropdown"><i className={`${saskatoonOpen ? `fas fa-angle-up pplUp` : `fas fa-angle-down`}`}></i></span>
            </div>
        </div>{/* End City Heading

        <ul className={`addEvent-submenu ${saskatoonOpen && `showSaskatoonAttendeeMenu`}`}>
            <li className="event-subheader-wrapper">
                <div className="event-subheader-row">
                    <h4>Provincial Court</h4>
                    <i className={`${reginaOpen ? `fas fa-angle-up pplUp` : `fas fa-angle-down`}`}></i>
                </div>
                <ul className={`${saskatoonPC && `showSaskatoonPC`}`}>
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
            <li className="event-subheader-wrapper">
                <div className="event-subheader-row" onClick={() => setSaskatoonKBOpen(!saskatoonKB)}>
                    <h4>Court of King's Bench</h4>
                    <i className={`${reginaOpen ? `fas fa-angle-up pplUp` : `fas fa-angle-down`}`}></i>
                </div>
                <ul className={`addEvent-submenu ${saskatoonKB && `showSaskatoonKB`}`}>
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
        </ul>{/* End Dropdown Menu 
    </div>

    </React.Fragment>
)}*/}








/* 
<div className="p-3">
                <div className="grid grid-cols-15 items-end gap-y-7">
                    <div></div>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Add title" 
                        id="" 
                        value={title}
                        required 
                        onChange={(e) => setTitle(e.target.value)}  
                        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus"/>
                        <span className="material-icons-outlined text-gray-400">
                        schedule
                    </span>
                    <p>{daySelected.format("dddd, MMMM DD")}</p>
                    <span className="material-icons-outlined text-gray-400">
                        segment
                    </span>
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="Add a description" 
                        id="" 
                        value={description}
                        required 
                        onChange={(e) => setDescription(e.target.value)}  
                        className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus"
    
                    />
                    <span className="material-icons-outlined text-gray-400">
                        bookmark-border
                    </span>
                    
                </div>
            </div>

<div className="flex gap-x">
    {labelsClasses.map((lblClass, i) => (
        <span 
            key={i} 
            onClick={() => setSelectedLabel(lblClass)}
            className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
        >
        {selectedLabel === lblClass && (
            <span className="material-icons-outlined text-white text-sm">
                check
            </span>
        )}
        
        </span>
    ))}
</div>
*/