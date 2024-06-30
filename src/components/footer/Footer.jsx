import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa';
import '../footer/footer.css';
import { navItems } from '../NavItems';

function Footer() {
 
  return (
    <>
      <nav className='footer'>
        <Link to='/' className='footer-logo'>
          Musiklektioner
          <Icons.FaTree />
        </Link>
       
        
      </nav>
    </>
  );
}

export default Footer;
