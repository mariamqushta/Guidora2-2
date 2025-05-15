import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSelect = (userType) => {
    localStorage.setItem('userRole', userType);
    navigate(`/profile/${userType}`);
  };

  return (
    <div className="container mx-auto mt-3 ">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Choose your role</h1>
      <div className="d-flex gap-8 mt-4">
        <button
          className="me-4 py-5 btn btn-outline-info h3 rounded-4"
          style={{ height: '200px', fontSize: '30px' }}
          onClick={() => handleSelect('user')}
        >
          I'm a Client
        </button>
        <button
          className="ms-4 py-5 btn btn-outline-info h3 rounded-4"
          style={{ height: '200px', fontSize: '30px' }}
          onClick={() => handleSelect('company')}
        >
          I'm a Company
        </button>
      </div>
    </div>
  );
};

export default Login;

