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
    <div style={{
      textAlign: 'center',
      padding: '20px',
      width: '80%', // or any fixed width
      margin: '0 auto', // centers the div horizontally
    }}>
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
          <option value="Garden A">King</option>
          <option value="Garden B">Shoal</option>
          <option value="Garden C">Point</option>
          <option value="Garden D">Great</option>
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
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ZQ6Byuk6KettUq2_IxDdGRaaKdKqBx0&ehbc=2E312F" width="640" height="480"></iframe>
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
