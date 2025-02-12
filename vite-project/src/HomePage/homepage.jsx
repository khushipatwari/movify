import React from 'react'
import './homepage.css'
// import Truedetective from './truedetective';
import Squidgame from './squidgame'
// import Deadpool from './deadpool';
import Search from './search'
import CharacterSection from './charactersection'
import PromotionalPage from './promotionalpage'
import Footer from './footer'

const Homepage = () => {
  return (

   <div className='home-page'>
    <div className='navbar-body'>
    <div className='navbar-logo'>
       MOVIFY
    </div>
    <div className='navbar-options'>
        <div className='option'>Home</div>
        <div className='option'>Explore</div>
        <div className='option'>Trends</div>
    </div>
</div> 
        <Squidgame />
   <Search></Search>
   <CharacterSection></CharacterSection>
   <PromotionalPage></PromotionalPage>
   <Footer></Footer>
   </div>
  )
}

export default Homepage