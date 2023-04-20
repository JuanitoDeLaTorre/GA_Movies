import React from 'react'

export default function ActorBlock({actor, url}) {
  return (
    <div id = "actorBlock">
        <p style = {{textAlign: "center"}}>{actor}</p>
        <img src={url} alt="" />
        
    </div>
  )
}
