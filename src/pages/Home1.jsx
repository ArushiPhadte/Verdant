import React, { useState } from 'react';
import './Textfield.css';  // You'll style the text field in this file
import { useNavigate } from 'react-router-dom';
import TextField from "../components/Textfield";  // Ensure the casing matches

// Enter name here
function Home1() {
  const [name, setName] = useState('');
  const navigate = useNavigate();  // useNavigate hook for navigation

  // Step 2: Create a function to update the state when the user types in the text field
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    // Navigate to the About page after the button click
    navigate('/about');
  };

  return (
    <div style={{
      textAlign: 'center',
      padding: '20px',
      width: '80%', // or any fixed width
      margin: '0 auto', // centers the div horizontally
    }}>
      <h2>What's your name?</h2>
      <TextField
        label="Name  "
        placeholder="Enter your name..."
        value={name}
        onChange={handleInputChange}  // Handle input change
      />
      <button
        onClick={handleClick} // When the button is pressed
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          backgroundColor: 'lightblue',
          borderRadius: '5px',
        }}
      >
        Continue
      </button>

      {/* Optionally, display the entered name */}
      {name && <p>Hello, {name}!</p>}
    </div>
  );
}

export default Home1;