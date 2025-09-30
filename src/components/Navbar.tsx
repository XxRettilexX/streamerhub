import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-brand">StreamerHub</div>
            <ul className="nav-links">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/merch"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Merch
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/streams"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Streams
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;