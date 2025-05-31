import React from 'react';
import './SideBar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';
import userIcon from '../../images/user1.png';
import propertyIcon from '../../images/property.png';
import reportIcon from '../../images/report.png';
import supportIcon from '../../images/support.png';
import logoutIcon from '../../images/logout.png';

const SideBar = ({ isOpen, onToggle }) => {
  const location = useLocation();

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <br />
          <span className="logo-text">InspeCasa<br />PROPERTY EYE</span>
        </div>

        <nav className="nav-menu">
          <Link to="/users" className={`nav-item ${location.pathname === '/users' ? 'active' : ''}`}>
            <div className="nav-icon">
              <img src={userIcon} alt="Users" />
            </div>
            <span>Users</span>
          </Link>

          <Link to="/property" className={`nav-item ${location.pathname === '/property' ? 'active' : ''}`}>
            <div className="nav-icon">
              <img src={propertyIcon} alt="Property" />
            </div>
            <span>Property</span>
          </Link>

          <Link to="/reports" className={`nav-item ${location.pathname === '/reports' ? 'active' : ''}`}>
            <div className="nav-icon">
              <img src={reportIcon} alt="Reports" />
            </div>
            <span>Reports</span>
          </Link>

          <Link to="/support" className={`nav-item ${location.pathname === '/support' ? 'active' : ''}`}>
            <div className="nav-icon">
              <img src={supportIcon} alt="Support" />
            </div>
            <span>Support</span>
          </Link>
        </nav>

        <Link to="/logout" className="logout-button">
          <div className="nav-icon">
            <img src={logoutIcon} alt="Logout" />
          </div>
          <span>Logout</span>
        </Link>
      </div>
      {isOpen && <div className="sidebar-overlay" onClick={onToggle}></div>}
    </>
  );
};

export default SideBar; 