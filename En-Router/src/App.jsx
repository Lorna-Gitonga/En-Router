
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import details from './pages/Details'

function App() {
  return(
    <div className="min-h-screen bg-primary">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<details />} />
      </Routes>
    </div>
  );
}

export default App;
