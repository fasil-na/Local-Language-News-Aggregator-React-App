import React from 'react';
import './Footer.scss';

const Footer =()=> {
  return (
    <footer className='footer'>
      <div className='footer-section contact'>
        <p>123 News Street, City, Country | Phone: (123) 456-7890 | Email: info@localnews.com</p>
      </div>
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} Local News. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
