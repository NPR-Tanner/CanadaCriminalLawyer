import React from 'react';
import './../App.css';
import NavigationBar from './Navbar'; // import react component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <p>
          Edit <code>src/App.js</code> and save to reload. I have just made an edit.
        </p>
      </header>
    </div>
  );
}

export default App;
