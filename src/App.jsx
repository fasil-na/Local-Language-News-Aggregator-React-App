import React from 'react';
import NewsInfo from './Components/NewsInfo/NewsInfo';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="content">
          <NewsInfo />
        </div>
      </main>
          <Footer/>
    </div>
  );
}

export default App;
