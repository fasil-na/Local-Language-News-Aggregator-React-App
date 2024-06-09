import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsInfo from './Components/NewsInfo/NewsInfo';
import NotFound from './Components/NotFound/NotFound'; 
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
            <Routes>
              <Route path="/" element={<NewsInfo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
      </div>
    </Router>
  );
}

export default App;
