import React from 'react'
import { Link } from 'react-router-dom'



export default function NavBar({user}) {
  return (
    <header>
        <h1>THE GREAT MOVIE APP!</h1>
        <nav>
            <ul>
                <li><Link to = "/movies">All Movies</Link></li>
                <li><Link to = "/actors">All Actors</Link></li>
                <li><b>Welcome, {user}!</b></li>

            </ul>
        </nav>
    </header>
  )
}
