import React from 'react'
import "./Home.scss"
import HeroBannerr from './herroBenner/HeroBannerr'
import Trending from './trending/Trending'

function Home() {
  return (
    <div className='homepage'>
      <HeroBannerr/>
      <Trending/>
    </div>
  )
}

export default Home
