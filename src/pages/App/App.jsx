import './App.css';
import { useState } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import MovieListPage from '../MoviesListPage/MovieListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {

  const [user, setUser] = useState(null)

  return (
    <main className="App">
      { user ? 
      <Routes>
          <Route path="/" element={<NavBar user={user} />} />
          <Route path="/movies/:movieName" element={<MovieDetailPage user={user}  />} />
          <Route path="/actors" element={<ActorListPage user={user}  />} />
      </Routes>

      : <LoginPage setUser={setUser} />
  }
    </main>
  );
}
