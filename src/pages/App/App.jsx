import './App.css';
import { useState } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import MovieListPage from '../MoviesListPage/MovieListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../NavBar/NavBar';
import { Route, Routes, useParams } from 'react-router-dom';
import { movies } from "../../data.js"


export default function App() {

  console.log(movies[0])
  const [user, setUser] = useState(null)

  return (
    <main className="App">
      { user ? 
      <Routes>
          <Route path="/" element={<NavBar user={user} />} />
          <Route path="/movies" element={<MovieListPage user={user} movies = {movies} />} />
          <Route path="/movies/:movieName" element={<MovieDetailPage user={user} movies = {movies} />} />
          <Route path="/actors" element={<ActorListPage user={user}  />} />
      </Routes>

      : <LoginPage setUser={setUser} />
  }
    </main>
  );
}
