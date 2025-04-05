import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home1 from './pages/Home1';  // Ensure this path is correct
import About1 from './pages/About1';  // Ensure this path is correct
import AMainscreen from './pages/AMainscreen';
import BMainscreen from './pages/BMainscreen';
import CMainscreen from './pages/CMainscreen';
import logo from "/vite.png"

function App() {
  // Initialize useNavigate hook inside the functional component
  const navigate = useNavigate();
  const [showText, setShowText] = useState(true); // State to control text visibility

  // useEffect hook to ensure clean-up of state or actions on page changes
  useEffect(() => {
    // This will be called on every page change to reset/show elements if needed
    setShowText(true); // Resets state if required whenever the page changes
  }, []); // Empty array ensures this is only run once on mount

  const handleClick = () => {
    // Hide the text when the button is clicked
    setShowText(false);
    // Navigate to the Home page after the button click
    navigate('/home');
  };

  return (
    <div className="App" style={{
      marginLeft: "2em"
    }}>
      {showText && (
        <>
          <img src="/vite.png" height={"300px"} width={"250px"}></img>
          <h1 style={{ marginTop: '50px' }}>Verdant</h1>
          <p style={{ marginTop: '20px'}}>Your urban gardening journey begins here.</p>
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
        </>
      )}

      <Routes>
        <Route path="/home" element={<Home1 />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/AMainscreen" element={<AMainscreen />} />
        <Route path="/BMainscreen" element={<BMainscreen />} />
        <Route path="/CMainscreen" element={<CMainscreen />} />
      </Routes>
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