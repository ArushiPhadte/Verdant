import React from 'react';

function TextField({ label, placeholder, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value} // Bind value to the parent state
        onChange={onChange} // Handle input change in parent
      />
    </div>
  );
}

export default TextField;

