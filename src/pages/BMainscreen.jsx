import React, { useState, useEffect } from 'react';

function BMainscreen() {
  const [wateredCount, setWateredCount] = useState(0);
  const [selectedGarden, setSelectedGarden] = useState('');
  const [message, setMessage] = useState('');

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Format: 'YYYY-MM-DD'
  };

  const waterPlant = () => {
    if (!selectedGarden) {
      setMessage('Please select a garden first.');
      return;
    }

    const lastWateredKey = `lastWatered_${selectedGarden}`;
    const lastWateredDate = localStorage.getItem(lastWateredKey);
    const today = getTodayDate();

    if (lastWateredDate === today) {
      setMessage(`You've already watered ${selectedGarden} today.`);
    } else {
      setWateredCount(wateredCount + 1);
      localStorage.setItem(lastWateredKey, today);
      setMessage(`You watered ${selectedGarden}! Great job!`);
    }
  };

  const handleGardenChange = (event) => {
    setSelectedGarden(event.target.value);
    setMessage(''); // Clear message when garden changes
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

      {/* Feedback message */}
      {message && (
        <div style={{ color: 'green', marginTop: '10px', fontSize: '16px' }}>
          {message}
        </div>
      )}

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

export default BMainscreen;
