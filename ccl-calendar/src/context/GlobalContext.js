import React from 'react'

// this object keeps all of our state
const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    showEventModal: false,
    setShowEventModal: () => {},
    screenSize: '',
    setScreenSize: () => {},
    loggedIn: false,
    setStatus: () => {} 
})

export default GlobalContext