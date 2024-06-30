import React, { useState } from "react";
import { documentDropdown } from "../NavItems";
import { Link } from "react-router-dom";
import "./dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "documents-submenu clicked" : "documents-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {documentDropdown.map((item) => {
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