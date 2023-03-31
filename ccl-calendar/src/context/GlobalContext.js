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
    setStatus: () => {},
    showLogin: false,
    setShowLogin: () => {},
    showRegister: false,
    setShowRegister: () => {},
    showForgotPassword: false, 
    setShowForgotPassword: () => {},
})

export default GlobalContext