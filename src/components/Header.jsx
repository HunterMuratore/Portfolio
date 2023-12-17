import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../images/logo-purple.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

  const toggleExperienceDropdown = () => {
    setIsExperienceOpen(!isExperienceOpen);
  };

  const closeExperienceDropdown = () => {
    setIsExperienceOpen(false);
  };

  return (
    <header className="flex items-center justify-between py-1 pl-3 pr-3">
      <NavLink to="/">
        <img className="max-h-[36px] lg:max-h-[52px]" src={logo} alt="HMM Logo" />
      </NavLink>

      <nav className="text-sm sm:text-md lg:text-lg flex items-center">
        <NavLink to="/" onClick={closeExperienceDropdown}>Home</NavLink>
        <NavLink to="/about" onClick={closeExperienceDropdown}>About</NavLink>
        <NavLink to="/projects" onClick={closeExperienceDropdown}>Projects</NavLink>

        <div className='relative'>
          <div onClick={toggleExperienceDropdown} className="cursor-pointer text-white">
            Experience <FontAwesomeIcon className="dropdown" icon={isExperienceOpen ? faCaretUp : faCaretDown} />
          </div>

          {isExperienceOpen && (
            <div className="flex flex-col absolute mt-2 bg-white border border-gray-200 rounded shadow-lg">
              <NavLink to="/resume" onClick={closeExperienceDropdown} className="px-3 py-2 text-gray-800">
                Resume
              </NavLink>
              <NavLink to="/certificate" onClick={closeExperienceDropdown} className="px-3 py-2 text-gray-800">
                Certificate
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/contact" onClick={closeExperienceDropdown}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
