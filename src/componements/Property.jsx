import React from 'react';
import './Property.css';
import { FiMapPin, FiPlus, FiMoreVertical } from 'react-icons/fi';
import Sidebar from './Sidebar';
import profile from '../images/profile.png';
import searchIcon from '../images/magnifying-glass 1.png';
import home1 from '../images/home1.png';
import home2 from '../images/home2.png';
import home3 from '../images/home3.png';
import home4 from '../images/home4.png';
import home5 from '../images/home5.png';
import home6 from '../images/home6.png';
import home1image from '../images/home1image.jpg';
import home2image from '../images/home2image.png';
import home3image from '../images/home3image.jpg';  
import home4image from '../images/home4image.jpg';
import home5image from '../images/home5image.png';
import home6image from '../images/home6image.jpg';
const Property = () => {
    const properties = [
        {
            id: 1,
            name: "Rosewood Villa",
            location: "Paris, France",
            image: home1,
            status: "Pending",
            progress: 65,
            inspector: {
                name: "Olivia Carter",
                avatar: home1image,
                role: "Inspector"
            }
        },
        {
            id: 2,
            name: "Blue Pearl Residency",
            location: "Lisboa, Portugal",
            image: home2,
            status: "In Review",
            progress: 45,
            inspector: {
                name: "Ellen Mitchell",
                avatar: home2image,
                role: "Inspector"
            }
        },
        {
            id: 3,
            name: "Sunny Side Bungalow",
            location: "Brisbane, Australia",
            image: home3,
            status: "Pending",
            progress: 85,
            inspector: {
                name: "Emma Collins",
                avatar: home3image,
                role: "Inspector"
            }
        },
        {
            id: 4,
            name: "Brickstone House",
            location: "Berlin, Germany",
            image: home4,
            status: "Pending",
            progress: 75,
            inspector: {
                name: "Liam Edwards",
                avatar: home4image,
                role: "Inspector"
            }
        },
        {
            id: 5,
            name: "Coral Heights",
            location: "Cape Town, South Africa",
            image: home5,
            status: "In Progress",
            progress: 70,
            inspector: {
                name: "Sophia Bennett",
                avatar: home5image,
                role: "Inspector"
            }
        },
        {
            id: 6,
            name: "White Haven Cottage",
            location: "Vancouver, Canada",
            image: home6,
            status: "Pending",
            progress: 75,
            inspector: {
                name: "Noah Brooks",
                avatar: home6image,
                role: "Inspector"
            }
        }
    ];

    return (
        <>
            <Sidebar />
            <div className="property-container">
                <div className="property-header">
                    <h1 className="property-title">Property management</h1>
                    <div className="header-right">
                        <div className="search-container">
                            <img src={searchIcon} alt="search" className="search-icon2" />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search for something"
                                style={{paddingLeft:"40px" , margin:"10px"}}
                            />
                        </div>
                        <img
                            src={profile}
                            alt="Profile"
                            className="profile-photo"
                        />
                    </div>
                </div>

                <div className="date-filters">
                    <div className="date-input-container">
                        <label className="date-label">Start Date</label>
                        <input
                            type="date"
                            className="date-input"
                        />
                    </div>
                    <div className="date-input-container">
                        <label className="date-label">End Date</label>
                        <input
                            type="date"
                            className="date-input"
                        />
                    </div>
                </div>

                <div className="property-grid">
                    {properties.map((property) => (
                        <div key={property.id} className="property-card">
                            <img
                                src={property.image}
                                alt={property.name}
                                className="property-image"
                            />
                            <div className="property-info">
                                <button className="more-options">
                                    <FiMoreVertical />
                                </button>
                                <span className={`property-status status-${property.status.toLowerCase().replace(' ', '-')}`}>
                                    {property.status}
                                </span>
                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${property.progress}%` }}
                                    />
                                </div>
                                <h3 className="property-name">{property.name}</h3>
                                <div className="property-location">
                                    <FiMapPin className="location-icon" />
                                    <span>{property.location}</span>
                                </div>
                                <div className="inspector-info">
                                    <div className="inspector">
                                        <img
                                            src={property.inspector.avatar}
                                            alt={property.inspector.name}
                                            className="inspector-avatar"
                                        />
                                        <span className="inspector-name">
                                            {property.inspector.name}
                                        </span>
                                    </div>
                                    <span className="inspector-badge">
                                        {property.inspector.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="add-property">
                    <FiPlus />
                </button>
            </div>
        </>
    );
};

export default Property;
