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
    // Navigate to the Mainscreen page after the button click
    navigate('/Mainscreen');
  };

  return (
    <div>
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
        onClick={handleClick} // When the button is pressed
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          backgroundColor: 'lightblue',
          borderRadius: '5px',
        }}
      >
        Let's Start!
      </button>
    </div>
  );
}

export default About1;
