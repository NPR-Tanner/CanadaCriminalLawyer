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
    const [dummyVar, setDummyVar] = useState(false);
    const [baseURL, setBaseURL] = useState('http://localhost:8000/');
    const [userID, setUserID] = useState({});
    const [userCourtDates, setUserCourtDates] = useState([]);
    const [filters, setFilters] = useState({court_type: ['Provincial Court', 'Kings Bench'], cities: ['Regina']})

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

    useEffect(() => {
      const token = localStorage.getItem("sessionToken");
      const userCourtDateToken = localStorage.getItem("userCourtDateToken");
      const userFilters = localStorage.getItem("filters");

      if (token) {
        setStatus(true);
        setUserID(JSON.parse(token));
        console.log(`userID token: ${JSON.parse(token)}`);

        if (userCourtDateToken) {
          setUserCourtDates(JSON.parse(userCourtDateToken));
          console.log(`User Court Dates Token: ${JSON.parse(userCourtDateToken)}`);
        }

        if (userFilters) {
          setFilters(JSON.parse(userFilters));
          console.log(`User filters: ${JSON.parse(userFilters)}`)
        }

      } else {
        setStatus(false);
      }
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
            dummyVar,
            setDummyVar,
            baseURL,
            userID,
            setUserID,
            userCourtDates,
            setUserCourtDates,
            filters,
            setFilters
        }}>
        {props.children}
    </GlobalContext.Provider>
  )
}