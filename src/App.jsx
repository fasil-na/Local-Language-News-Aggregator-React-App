import React from 'react';

import WeatherInfo from './Components/WeatherInfo/WeatherInfo';
import NewsInfo from './Components/NewsInfo/NewsInfo';
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
