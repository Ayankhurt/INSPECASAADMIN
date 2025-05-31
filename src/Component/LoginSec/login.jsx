import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../images/Login.jpg';
import './login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/users');
  };

  return (
    <div className="login-page">
      <div className="image-container">
        <img src={image} className='image1' alt="logo" />
      </div>
      <div className="login-container">
        <h1 className="login-title">Welcome Back to Home Inspection</h1>
        <p className="login-description">Enter your login details to continue your filmmaking journey.</p>
        
        <div>
          <label>Full Name</label>
          <input type="text" placeholder="User name" />
        </div>
        
        <div>
          <label>Password</label>
          <input type="password" placeholder="••••••••••" />
        </div>

        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
