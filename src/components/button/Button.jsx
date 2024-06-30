import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

function Button() {
  return (
    <Link to="login">
      <button className="btn">Logga in</button>
    </Link>
  );
}

export default Button;