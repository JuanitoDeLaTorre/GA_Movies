import React from 'react'
import NavBar from '../NavBar/NavBar'

export default function ActorListPage({user, movies}) {

  const allActors = []

  for (let i = 0; i < movies.length; i++) {
    for(let j = 0; j < movies[i].cast.length; j++){
      allActors.push(movies[i].cast[j])
    }
  }

  const uniqueActors = [...new Set(allActors)]
  let images = []

  async function getImages() {
    // for (let i = 0; i < uniqueActors.length; i++) {
    //   console.log(i)
      const newImage = await fetch("https://picsum.photos/v2/list?limit=72")
      images = newImage
      // images.push(newImage.url)
    
  }
  
  getImages()

  function getImagesString() {
    console.log(images)
    // images.map(image => console.log(image))
  }

  return (
    <>
    <NavBar user={user}/>
    <div>All Actors are here!</div>
    <img src={fetch('https://picsum.photos/200').then(res => res.url)} alt="" />
    {uniqueActors.map(actor => <p key = {actor}>{actor}</p>)}
    <button onClick={getImagesString}>Add Actor</button>
    </>
  )
}
