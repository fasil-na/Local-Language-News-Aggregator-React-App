import React from 'react';
import './Header.scss';

const Header=()=> {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <header className="app-header">
      <img
        src="https://st4.depositphotos.com/1185628/24546/v/450/depositphotos_245467064-stock-illustration-newspaper-icon-vector-template.jpg"
        alt="Logo"
        className="logo"
      />
      
      <div className="header-content">
        <h1>Local News and Weather</h1>
        <h2>Your personalized news and weather updates</h2>
        <p>{formattedDate}</p>
      </div>
    </header>
  );
}

export default Header;
