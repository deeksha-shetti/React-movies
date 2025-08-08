import './App.css';
import Home from "./page/home";      // Capitalized to match file name
import Favorites from './page/favorites';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
  );
}

export default App;
