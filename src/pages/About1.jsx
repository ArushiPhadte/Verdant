import React, { useState } from 'react';
import './Textfield.css';  // You'll style the text field in this file
import { useNavigate } from 'react-router-dom';
import TextField from "../components/Textfield";  // Ensure the casing matches

function About1() {
  const [community, setCommunity] = useState('');
  const navigate = useNavigate();  // useNavigate hook for navigation

  // Handle the change in dropdown selection
  const handleSelectChange = (event) => {
    setCommunity(event.target.value);
  };

  const handleClick = () => {
    // Navigate to different pages depending on the selected city
    if (community === 'Community 1') {
      navigate('/AMainscreen');
    } else if (community === 'Community 2') {
      navigate('/BMainscreen');
    } else if (community === 'Community 3') {
      navigate('/CMainscreen');
    } else {
      alert('Please select a community first!');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Select your community:</h2>

      {/* Dropdown menu for community selection */}
      <select 
        value={community} 
        onChange={handleSelectChange} 
        style={{ padding: '10px', fontSize: '16px', borderRadius: '5px' }}
      >
        <option value="">--Select Community--</option>
        <option value="Community 1">Toronto</option>
        <option value="Community 2">Calgary</option>
        <option value="Community 3">Vancouver</option>
      </select>

      <button
        onClick={handleClick}
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          backgroundColor: 'lightblue',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Let's Start!
      </button>
    </div>
  );
}

export default About1;
