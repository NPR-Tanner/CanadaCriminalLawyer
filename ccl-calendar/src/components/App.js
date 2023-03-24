import React from 'react';
import NavigationBar from './Navbar'; // import react component
import MobileNavigation from './MobileNav';
import Footer from './Footer';
//import Calendar from './calendar/Calendar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <main>
        <div className="calendarPlaceholderParent"><div className='calendarPlaceholder'></div></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
