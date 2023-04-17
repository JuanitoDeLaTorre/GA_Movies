import React from 'react'
import NavBar from '../NavBar/NavBar'
import { useParams } from 'react-router-dom'



export default function MovieDetailPage({user, movies}) {

  const reqMovie = useParams().movieName

  const selectMovie = movies.find(movie => movie.title === reqMovie)

  console.log(selectMovie)

  return (
    <>
    <NavBar user = {user}/>
    <h1 style = {{textAlign: 'center', fontSize: "3em"}}>{selectMovie.title}</h1>
    <h3 style = {{textAlign: 'center'}}>Actors</h3>
    <hr />
    <div className="actors">
      <span>|</span>
      {selectMovie.cast.map((actor)=> {
        return(
          <>
          <p>{actor}</p>
          <span>|</span>
          </>
        ) 
      })}
    </div>
    <img src={selectMovie.posterPath} style = {{marginLeft: "27%"}} alt="" />
    </>
  )
}
