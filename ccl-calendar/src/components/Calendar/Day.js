import React, { useContext } from 'react'
import dayjs from 'dayjs'
import GlobalContext from '../../context/GlobalContext';
import './../../css/Calendar.css'

export default function Day({ day, rowIdx, isOffMonth }) {
    //const {daySelected, setDaySelected} = useContext(GlobalContext);
    const {daySelected, setDaySelected, setShowEventModal} = useContext(GlobalContext);


    function getCurrentDayClass() {
        // comparing the value of day in this component to the current day using dayjs
        // passing nothing to dayjs() defaults to present day
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") 
            ? 'currentDay' 
            : '';
    }

    function getSelectedDayClass() {
        return day.format("DD-MM-YY") === daySelected.format("DD-MM-YY")
            ? 'indDay'
            : '';
    }

  return (
    
    <div onClick={() => {
        setDaySelected(day);
        setShowEventModal(true);
    }} 
        className={`dayWrapper border border-gray-200 flex flex-col ${getSelectedDayClass()}`}>
    {/* This is an instance of dayjs, so we can use the format method for that day */}
        <div className="flex flex-col">
            <p className={`calDD ${getCurrentDayClass()} ${isOffMonth && `dayOffMonth`}`}>
                {day.format('DD')}
            </p>
        </div>
        
        <div className="flex-1 cursor-pointer">
            {""}
        </div>
    </div>
  )
}

/* Triggering multiple functions from one click event
onClick={() => {
    setSmallCalendarMonth(currentMonthIdx);
    setDaySelected(day);
}}

<div onClick={setDaySelected(day)} className={`border border-gray-200 flex flex-col ${getSelectedDayClass()}`}>

bg-blue-600 text-white rounded-full w-7 
*/