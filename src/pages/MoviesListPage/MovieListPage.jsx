import React from 'react'
import NavBar from '../NavBar/NavBar'
import MovieBlock from './MovieBlock'
import { Link } from 'react-router-dom'



export default function MovieListPage({user, movies}) {
  return (
    <>
    <NavBar user={user}/>
    <div className="movieListContainer">
        {movies.map((movie)=> {

            return <Link key = {movie.title} to={`/movies/${movie.title}`}><MovieBlock  movie = {movie}/></Link>
        })}
    </div>
    
    </>
  )
}
