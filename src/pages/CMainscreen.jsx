import React, { useState } from 'react';

function CMainscreen() {
  const [wateredCount, setWateredCount] = useState(0);
  const [selectedGarden, setSelectedGarden] = useState('');

  const waterPlant = () => {
    setWateredCount(wateredCount + 1);
  };

  const handleGardenChange = (event) => {
    setSelectedGarden(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ marginTop: '50px' }}>Welcome to Your Homepage!</h1>

      {/* Dropdown menu for selecting an urban garden */}
      <div style={{ marginTop: '30px' }}>
        <label htmlFor="garden" style={{ fontSize: '16px', marginRight: '10px' }}>
          Select an Urban Garden:
        </label>
        <select
          id="garden"
          value={selectedGarden}
          onChange={handleGardenChange}
          style={{ padding: '10px', fontSize: '16px' }}
        >
          <option value="">-- Choose a garden --</option>
          <option value="Garden A">Garden A</option>
          <option value="Garden B">Garden B</option>
          <option value="Garden C">Garden C</option>
          <option value="Garden D">Garden D</option>
          <option value="Garden E">Garden E</option>
          <option value="Garden F">Garden F</option>
        </select>
      </div>

      {/* Watered Plants Count */}
      <div style={{ marginTop: '30px', fontSize: '18px' }}>
        <p>Plants Watered: {wateredCount}</p>
      </div>

      {/* Placeholder for Map */}
      <div
        style={{
          marginTop: '40px',
          height: '300px',
          width: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '2px dashed gray',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          color: 'gray',
        }}
      >
        Map Placeholder — Urban Garden Location Will Show Here
      </div>

      {/* Button to water the plant (moved to the bottom) */}
      <button
        onClick={waterPlant}
        style={{
          padding: '15px 30px',
          backgroundColor: 'lightgreen',
          borderRadius: '5px',
          fontSize: '16px',
          marginTop: '40px',
          cursor: 'pointer',
        }}
      >
        Start Watering Plants!
      </button>
    </div>
  );
}

export default CMainscreen;
