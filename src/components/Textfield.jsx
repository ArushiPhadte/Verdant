// src/components/Textfield.jsx
import React from 'react';

const TextField = ({ label, placeholder }) => {
  return (
    <div className="textfield-container">
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default TextField;
