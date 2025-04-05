import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home1';  // Ensure this path is correct

function App() {
  // Initialize useNavigate hook inside the functional component
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the Home page when the button is clicked
    navigate('/home');
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>

      <h1 style={{ marginTop: '50px', color: '#000', fontSize: '40px' }}>Verdant</h1>

      {/* Change the paragraph tag to p for standard semantic HTML */}
      <p style={{ marginTop: '20px', color: '#333' }}>
        Your urban gardening journey begins here.
      </p>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>

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
    </div>
  );
}

function Wrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Wrapper;