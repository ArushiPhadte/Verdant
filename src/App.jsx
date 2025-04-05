//First page
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home1';  // Make sure the file name is Home.jsx
import About from './pages/About1';  // Make sure the file name is About.jsx

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
