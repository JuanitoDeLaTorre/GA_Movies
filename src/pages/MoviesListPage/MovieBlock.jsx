import React from 'react'

export default function MovieBlock({movie}) {
  return (
    <div class = "movieBlock">
        <div className="info" style = {{zIndex: "100"}}>
            <h2>{movie.title}</h2>
            <p>[Released: {movie.releaseDate}]</p>
            <p>Star Actor/Actress: {movie.cast[0]}</p>
        </div>
        
        <img src={movie.posterPath} alt="" />
    </div>
  )
}
