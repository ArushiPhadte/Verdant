import React, { useState } from 'react';

function Mainscreen() {
  // State to store the number of plants watered
  const [wateredCount, setWateredCount] = useState(0);

  // Function to simulate watering a plant
  const waterPlant = () => {
    setWateredCount(wateredCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ marginTop: '50px' }}>Welcome to Your Homepage!</h1>

      {/* Button to water the plant */}
      <button
        onClick={waterPlant}
        style={{
          padding: '15px 30px',
          backgroundColor: 'lightgreen',
          borderRadius: '5px',
          fontSize: '16px',
          marginTop: '20px',
          cursor: 'pointer',
        }}
      >
        Start Watering Plants!
      </button>

      {/* Watered Plants Count */}
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <p>Plants Watered: {wateredCount}</p>
      </div>

      {/* Placeholder for Map */}
      
    </div>
  );
}

export default Mainscreen;
