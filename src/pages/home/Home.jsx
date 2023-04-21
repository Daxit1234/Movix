import React from 'react'
import "./Home.scss"
import HeroBannerr from './herroBenner/HeroBannerr'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'


function Home() {
  return (
    <div className='homepage'>
      <HeroBannerr/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home
