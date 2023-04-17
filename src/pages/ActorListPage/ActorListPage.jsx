import React from 'react'
import NavBar from '../NavBar/NavBar'

export default function ActorListPage({user}) {
  return (
    <>
    <NavBar user={user}/>
    <div>All Actors are here!</div>
    </>
  )
}
