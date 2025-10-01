import { NavLink } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { useTheme } from "../contexts/ThemeContext";
import './Navbar.css'

function Navbar() {
  const { user, logout } = useUser();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
  };

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
        
        {/* User section */}
        <li>
          {user ? (
            <div className="user-section">
              <span className="user-greeting">Ciao, {user.name}</span>
              <button onClick={handleLogout} className="btn-secondary btn-small">
                Logout
              </button>
            </div>
          ) : (
            <NavLink 
              to="/login" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Accedi
            </NavLink>
          )}
        </li>

        {/* Theme toggle */}
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
