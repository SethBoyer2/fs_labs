import { NavLink } from "react-router-dom"

export function Navbar() {
    return(
        <nav>
            <section className="links">
                <NavLink to="/Organization">Organization Leadership</NavLink>
                <NavLink to="/Employees">Employees</NavLink>
            </section>
        </nav>
    )
}