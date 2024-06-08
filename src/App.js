import React from 'react';

import WeatherInfo from './WeatherInfo/WeatherInfo';
import NewsInfo from './NewsInfo/NewsInfo';
import './App.scss';


function App() {
  

  return (
    <div className="App">
    <WeatherInfo/>
    <NewsInfo/>
     
    </div>
  );
}

export default App;
