import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Component/LoginSec/login';
import Users from '../Component/UsersSec/Users';
import Property from '../Component/PropertySec/Property';
import Reports from '../Component/ReportSec/Reports';
import Support from '../Component/SupportSec/Support';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/users' element={<Users />} />
      <Route path='/property' element={<Property />} />
      <Route path='/reports' element={<Reports />} />
      <Route path='/support' element={<Support />} />
    </Routes>
  );
};

export default CustomRoutes; 