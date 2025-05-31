import React, { useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import CustomRoutes from './CustomRoutes/CustomRoutes';
import SideBar from './Component/SideBarSec/SideBar';
import Header from './Component/HeaderSec/Header';
import "./App.css";

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='main-container'>
      {!isLoginPage && (
        <>
          <SideBar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
          <Header toggleSidebar={toggleSidebar} />
        </>
      )}
      <div className={`route ${!isLoginPage ? 'with-nav' : ''} ${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
        <CustomRoutes />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
