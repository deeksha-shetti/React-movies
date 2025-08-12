import './css/App.css';
import Home from "./page/home";      // Capitalized to match file name
import Favorites from './page/favorites';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import NavBar from './components/NavBar';

function App() {
  return (

    <MovieProvider>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App;
