import { NavLink } from 'react-router-dom'

import logo from '../images/logo-brown.png'

function Header() {
    return (
        <header className="flex items-center justify-between py-1 pl-3 pr-3">
            <NavLink to="/"><img className="logo" src={logo} alt="HMM Logo" /></NavLink>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header