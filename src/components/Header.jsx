import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="flex justify-between pt-2 pl-3 pr-3">
            <NavLink to="/"><h3>Portfolio Practice</h3></NavLink>

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