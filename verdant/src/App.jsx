import './App.css';
import { useEffect, useState } from 'react'; // Import React hooks for state and effects
import React from 'react'; // Import React to work with JSX
import ReactDOM from 'react-dom/client'; // Import ReactDOM to render components to the browser

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;