import React from 'react';
import '../style/App.css';
import Header from './Header';
import Scoreboard from './Scoreboard';
import About  from './About';

function App() {
  return (
    <div className="App">
      <Header />
      <Scoreboard />
      <About />
    </div>
  );
}

export default App;
