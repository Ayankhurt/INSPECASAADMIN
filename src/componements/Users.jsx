import React, { useState } from 'react';
import './Users.css';
import Sidebar from './Sidebar';
import profile from '../images/profile.png';
import deleteIcon from '../images/delete.png';
import closeIcon from '../images/close.png';

const Users = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const handleMoreOptionsClick = (index, e) => {
    e.stopPropagation();
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
    setOpenDropdownIndex(null);
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdownIndex(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const users = [
    { name: 'Helina', email: 'Helina@gmail.com', phone: '+401 6789273', userType: 'Admin', status: 'Active' },
    { name: 'Helina', email: 'Helina@gmail.com', phone: '+401 6789273', userType: 'Inspector', status: 'Moderate' },
    { name: 'Helina', email: 'Helina@gmail.com', phone: '+401 6789273', userType: 'Inspector', status: 'Decline' },
    { name: 'Helina', email: 'Helina@gmail.com', phone: '+401 6789273', userType: 'Inspector', status: 'Active' },
    { name: 'Helina', email: 'Helina@gmail.com', phone: '+401 6789273', userType: 'Inspector', status: 'Moderate' },
    { name: 'Helina', email: 'Helina@gmail.com', phone: '+401 6789273', userType: 'Inspector', status: 'Decline' },
    { name: 'Helina', email: 'Helina@gmail.com', phone: '+401 6789273', userType: 'Inspector', status: 'Active' },
    { name: 'Helina', email: 'Helina@gmail.com', phone: '+401 6789273', userType: 'Inspector', status: 'Moderate' },
    { name: 'Helina', email: 'Helina@gmail.com', phone: '+401 6789273', userType: 'Inspector', status: 'Decline' },
    { name: 'Helina', email: 'Helina@gmail.com', phone: '+401 6789273', userType: 'Inspector', status: 'Active' },
    { name: 'Helina', email: 'Helina@gmail.com', phone: '+401 6789273', userType: 'Inspector', status: 'Moderate' },
    { name: 'Helina', email: 'Helina@gmail.com', phone: '+401 6789273', userType: 'Inspector', status: 'Decline' },
  ];

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className={`users-container ${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
        <div className="users-header">
          <div className="header-left">
            <h1>Users</h1>
          </div>
          <div className="header-right">
            <div className="search-container">
              <span className="search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" />
                </svg>
              </span>
              <input type="text" placeholder="Search for something" className="search-input" style={{margin:"10px" , padding:" 0 50px"}}/>
            </div>
            <div className="profile-icon">
              <img src={profile} alt="Profile" />
            </div>
          </div>
        </div>

        <div className="users-table">
          <table>
            <thead className='users-info'>
              <tr>
                <th>Name</th>
                <th>Email Address</th>
                <th>Phone No</th>
                <th>User Type</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.userType}</td>
                  <td>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="options-cell">
                    <button 
                      className="more-options"
                      onClick={(e) => handleMoreOptionsClick(index, e)}
                    >
                      ⋮
                    </button>
                    {openDropdownIndex === index && (
                      <div className="dropdown-menu">
                        <button onClick={() => console.log('Edit')}>Edit</button>
                        <button onClick={() => handleDeleteClick(user)}>Delete</button>
                        <button onClick={() => console.log('Accept')}>Accept</button>
                        <button onClick={() => console.log('Decline')}>Decline</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <span>Showing 1 to 3 of 12 entries</span>
            <div className="pagination-controls">
              <button className="prev">Previous</button>
              <button className="page-number active">1</button>
              <button className="page-number">2</button>
              <button className="page-number">3</button>
              <button className="next">Next</button>
            </div>
          </div>
        </div>

        <button className="add-button" onClick={handleAddClick}>+</button>

        {showDeleteModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h2>DeleteUser</h2>
                <button className="modal-close" onClick={handleCloseModal}><img src={closeIcon} alt="close" /></button>
              </div>
              <hr />
              <div className="modal-body">
                <div className="warning-icon"><img src={deleteIcon} alt="delete" /></div>
                <h2>Delete User</h2>
                <p className="modal-subtitle">Are you sure you want to delete this <br />
                 User? <br />
                This action cannot be undone.</p>
              </div>
              <div className="modal-footer">
                <button className="modal-button cancel" onClick={handleCloseModal}>Cancel</button>
                <button className="modal-button delete" onClick={handleCloseModal}>Delete</button>
              </div>
            </div>
          </div>
        )}

        {showAddModal && (
          <div className="modal-overlay">
            <div className="modal-content add-user-modal">
              <div className="modal-header1">
                <h2>Add User</h2>
                <button className="modal-close" onClick={handleCloseAddModal}>
                  <img src={closeIcon} alt="close" />
                </button>
              </div>
              <hr />
              <div className="add-user-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Full Name" />
                </div>
                
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Email Address" />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input type="password" placeholder="Password" />
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="Password" />
                </div>

                <div className="form-group">
                  <label>Phone no.</label>
                  <div className="phone-input">
                    <select className="country-code">
                      <option value="+92">+92</option>
                    </select>
                    <input type="tel" placeholder="Phone no." />
                  </div>
                </div>

                <button className="add-user-button">Add User</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users; 