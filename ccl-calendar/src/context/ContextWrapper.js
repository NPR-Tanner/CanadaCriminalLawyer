import React, { useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

/* This component wraps our entire application, we provide the context to the wrapper so 
all the children can access the context. */
export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month()) 
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);
    const [screenSize, setScreenSize] = useState('');
    const [loggedIn, setStatus] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            
            if (width >= 1250) {
              setScreenSize('large');
            } else if (width >= 900) {
              setScreenSize('medium');
            } else {
              setScreenSize('small');
            }
          };

          handleResize();
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <GlobalContext.Provider 
        value={{
            monthIndex, 
            setMonthIndex,
            daySelected,
            setDaySelected,
            showEventModal,
            setShowEventModal,
            screenSize,
            setScreenSize,
            loggedIn,
            setStatus,
            showLogin,
            setShowLogin,
            showRegister,
            setShowRegister,
            showForgotPassword, 
            setShowForgotPassword,
        }}>
        {props.children}
    </GlobalContext.Provider>
  )
}