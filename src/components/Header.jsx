import { NavLink } from 'react-router-dom'

import logo from '../images/logo-purple.png'

function Header() {
    return (
        <header className="flex items-center justify-between py-1 pl-3 pr-3">
            <NavLink to="/about"><img className="max-h-[36px] lg:max-h-[52px]" src={logo} alt="HMM Logo" /></NavLink>

            <nav className="text-sm sm:text-md lg:text-lg">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header