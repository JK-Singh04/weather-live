import React from 'react';

const GrantLocationAccess = ({ onAccess }) => {
  return (
    <div className="grant-location-container active">
      <img src="./images/location.png" alt="Location" />
      <p>Grant Location Access</p>
      <p>Allow Access to get weather Information</p>
      <button className="btn" onClick={onAccess}>Grant Access</button>
    </div>
  );
};

export default GrantLocationAccess;
