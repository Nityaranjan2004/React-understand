import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <nav>
        <Link to="/Page1">Page1</Link>
        <Link to="/Page2">Page2</Link>
    </nav>
  );
}

export default Header
