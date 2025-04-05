import React, { useState } from 'react';
import './Textfield.css'; // You'll style the text field in this file
import TextField from "../components/Textfield"; // Ensure the casing matches

//Enter name here 
function Home1() {
    return (
      <div>
        <h2>What's your name?</h2>
        <TextField label="Name" placeholder="Enter your name..." />
      </div>
    );
  }
  
  export default Home1;
  