import { useState } from 'react';
import { Link } from 'react-router-dom';
import './dropdown.css';

function Dropdown({ dropdownItems }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? 'documents-submenu clicked' : 'documents-submenu'}
        onClick={() => setDropdown(!dropdown)}
      >
        {dropdownItems.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
