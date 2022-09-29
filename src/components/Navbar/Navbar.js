import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
const Navbar = () => {
     return (
          <div>
               <h1 className='header-text my-2'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>Power <span>Gym</span></h1>
          </div>
     );
};

export default Navbar;