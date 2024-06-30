import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa';
import '../navbar/navbar.css';
import { navItems } from '../NavItems';
import Button from '../button/Button';
import Dropdown from '../dropdown/Dropdown';

function Navbar() {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setDropdownIndex(null);
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          Musiklektioner
          <Icons.FaTree />
        </Link>
        <ul className='nav-items'>
          {navItems.map((item, index) => {
            return (
              <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={item.path}>{item.title}</Link>
                {item.dropdownItems && dropdownIndex === index && (
                  <Dropdown dropdownItems={item.dropdownItems} />
                )}
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
