import React from 'react'
import './squidgame.css'

const Squidgame = () => {
  return (
    <div className='home-page-body'>
      <div className='text-message-first'>
            EXPLORE  A  WORLD WHERE  GAMES  
        </div>
        <div className='character-title'>
        <img className='character' src="/src/images/squidgamecharacter.png" alt="" />
        <img className='title' src='/src/images/squidgametitle.png'></img>
       </div>
       <div className='text-message-second'> 
            AREN’T JUST  FOR<br></br> FUN... THEY ARE  FOR  <br></br>
            <span>SURVIVAL!</span>
        </div>
    </div>
  )
}

export default Squidgame