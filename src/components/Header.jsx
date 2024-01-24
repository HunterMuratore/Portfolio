import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../images/logo-purple.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExperienceOpen, setIsExperienceOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleExperienceDropdown = () => {
    setIsExperienceOpen(!isExperienceOpen)
  }

  const closeExperienceDropdown = () => {
    setIsExperienceOpen(false)
  }

  return (
    <header className="">
      <nav className="flex items-center justify-between py-1 pl-3 pr-3 text-sm sm:text-md lg:text-lg">
        <NavLink to="/">
          <img className="max-h-[36px] lg:max-h-[52px]" src={logo} alt="HMM Logo" />
        </NavLink>

        {/* Hamburger menu icon for medium screens and below */}
        <div className="lg:hidden py-3">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <svg
                className="w-6 h-6 transition-transform duration-500 transform rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation links for large screens and above */}
        <div className="hidden lg:flex lg:items-center font-semibold my-4 text-sm sm:text-md lg:text-lg">
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
        </div>
      </nav>

      {/* Navigation links dropdown menu for medium screens and below */}
      <nav className={`${isOpen ? 'flex flex-col' : 'hidden'} dropdown lg:hidden px-3 py-2`}>
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
  )
}

export default Header
