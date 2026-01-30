import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LcdDetail from './pages/LcdDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/lcd-measuring-system" element={<LcdDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
