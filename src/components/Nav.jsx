import { Link} from 'react-router-dom';
import React, { useState } from 'react';

const Nav = () => {
  return (
<nav id="nav1">
        <div id="a">
            <div className="c"><Link to="/home"><img id='img' src="./foodlogo.png" alt="" /></Link></div>
            <div className="c">
                 <Link to="/men">VEG</Link>
            </div>
            <div className="c">NON-VEG</div>
            <div className="c">DESSERT</div>
            <div className="c">BEST HOTELS</div>
            <div className="c">TODAY DEALS</div>
            <div className="c"><div className="dropdown">
            </div></div>
        </div>

        <div id="b">
            <div id="h">
              <div></div>
              <input type="text" name="bar" id="bar" placeholder=" Browse our collection..." />
            </div>
                <div id="f">
                 <Link to="/login">LOGIN</Link>
            </div>
            <div className="e">
                 <Link to="/">SIGN UP</Link>
            </div>
            <div></div>
        </div>
    </nav>
  )
}

export default Nav