import React from 'react';
import Saved from './saved';

const UserProfile = () => {
  return (
    <>
    <div className="container my-5">
      <div className="card shadow-lg rounded-4 p-4 bg-light">
        <div className="text-center">
          <img
            src="/img_avatar1.png"
            alt="User Avatar"
            className="rounded-circle mb-3 border border-primary"
          />
          <h3 className="text-primary">John Doe</h3>
          <p className="text-muted">Traveler | Adventurer | Foodie</p>
        </div>
        <hr />
        <div className="row mt-4">
          <div className="col-md-12 d-flex justify-content-around">
            <p><strong>Email:</strong> john@example.com</p>
            <p><strong>Trips Booked:</strong> 14</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-primary rounded-pill px-4">Edit Profile</button>
        </div>
      </div>
      <hr/>
      <div className='mx-auto text-center'>
    <h2 className='mx-auto'>Saved Flight</h2>
    </div>
    </div>
      <Saved/>
    </>
  );
};

export default UserProfile;
