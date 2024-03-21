import React from "react";
import './button.css';
import { Link } from 'react-router-dom';

export const Button = () => {
return (
    <Link to='sign-up'>
        <button className="btn">Logga in</button>
    </Link>
);
};

export default Button;
 