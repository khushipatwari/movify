import React from 'react'
import './charactersection.css'

const CharacterSection = () => {
  return (
    <div className='character-section-body'>
        <img src='/src/images/deadpoolcharacter.png' alt=""  className='deadpool-image'/>
        <img src='/src/images/squidgamecharacter.png' alt="" className='squidgame-image' />
        <img src='/src/images/truedetectivecharacter.png' alt=""  className='truedetective-image'/>
    </div>
  )
}

export default CharacterSection