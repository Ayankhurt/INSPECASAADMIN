import { useLocation } from "react-router-dom";
import "./Header.css";
import React from "react";
import profile from '../../images/profile.png';
import searchIcon from '../../images/magnifying-glass 1.png';

const Header = ({ toggleSidebar }) => {
    const location = useLocation();

    const getHeading = (path) => {
        switch (path) {
            case "/":
                return "Login";
            case "/users":
                return "Users";
            case "/property":
                return "Property";
            case "/reports":
                return "Reports";
            case "/support":
                return "Support";
            default:
                return "Page";
        }
    };

    return (
        <div className='header-container'>
            <div className='inner-header-container'>
                <div className='side-bar-menu'>
                    <button className="menu-button" onClick={toggleSidebar}>
                        <span className="menu-icon">☰</span>
                    </button>
                </div>
                <div className="head">
                    <h1>{getHeading(location.pathname)}</h1>
                </div>
                <div className='search-flex'>
                    <div className="search">
                        <input 
                            type="text" 
                            placeholder="Search for something" 
                            className="search-input" 
                        />
                        <img src={searchIcon} alt="Search" className="search-icon" />
                    </div>
                    <div className='avater'>
                        <img src={profile} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header; 