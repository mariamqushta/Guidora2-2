import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './authform.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    email_login: '',
    password_login: '',
    acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const showAlert = (message) => {
    Swal.fire({
      title: 'This page says',
      text: message,
      background: '#000',
      color: '#fff',
      position: 'top',
      showConfirmButton: true,
      confirmButtonText: 'OK',
      customClass: {
        popup: 'custom-swal',
        title: 'custom-title',
        htmlContainer: 'custom-text',
        confirmButton: 'custom-button'
      },
      buttonsStyling: false
    });
  };

  const validateSignup = () => {
    if (!formData.acceptTerms) {
      showAlert('Please accept terms & conditions');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      showAlert('Passwords do not match');
      return false;
    }
    if (formData.password.length < 8) {
      showAlert('Password must be at least 8 characters');
      return false;
    }
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validateSignup()) return;

    setIsLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/auth/register",
        {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password
        },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      if (res.status === 201) {
        showAlert(`Welcome ${formData.fullName}! Registration successful`);
        setFormData({
          ...formData,
          fullName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        setIsActive(true);
      }
    } catch (err) {
      showAlert(err.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/auth/log-in",
        {
          email: formData.email_login,
          password: formData.password_login
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        }
      );

      const { accessToken, refreshToken } = res.data;
      if (!accessToken || !refreshToken) {
        throw new Error('Tokens not received');
      }

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      showAlert('Login successful!');
      setFormData({
        ...formData,
        email_login: '',
        password_login: ''
      });

      // Navigate to role selection page
      navigate('/login');
    } catch (err) {
      showAlert(err.response?.data?.message || 'Login failed');
      setFormData(prev => ({
        ...prev,
        password_login: ''
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`wrapper ${isActive ? 'active' : ''}`}>
      <div className="form signup">
        <header onClick={() => setIsActive(false)}>SignUp</header>
        <form onSubmit={handleSignup}>
          <input type="text" name="fullName" placeholder="Full name" value={formData.fullName} onChange={handleChange} required disabled={isLoading} className="form-control mb-2 mt-3" />
          <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required disabled={isLoading} className="form-control mb-2" />
          <input type="password" name="password" placeholder="Password (min 8 characters)" value={formData.password} onChange={handleChange} required disabled={isLoading} className="form-control mb-2" minLength="8" />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required disabled={isLoading} className="form-control mb-2" minLength="8" />
          <div className="checkbox mb-3">
            <input type="checkbox" id="signupCheck" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} disabled={isLoading} className="me-2" />
            <label htmlFor="signupCheck">I accept all terms and conditions</label>
          </div>
          <button type="submit" className="btn btn-light text-secondary fs-4 w-100" disabled={isLoading}>
            {isLoading ? <> <span className="spinner-border spinner-border-sm me-2"></span> Processing... </> : 'Sign Up'}
          </button>
        </form>
      </div>

      <div className="form login">
        <header onClick={() => setIsActive(true)}>Login</header>
        <form onSubmit={handleLogin}>
          <input type="email" name="email_login" placeholder="Email address" value={formData.email_login} onChange={handleChange} required disabled={isLoading} className="form-control mb-2" />
          <input type="password" name="password_login" placeholder="Password" value={formData.password_login} onChange={handleChange} required disabled={isLoading} className="form-control mb-2" />
          <button type="submit" className="btn btn-secondary w-100 fs-4" disabled={isLoading}>
            {isLoading ? <> <span className="spinner-border spinner-border-sm me-2"></span> Logging in... </> : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;

