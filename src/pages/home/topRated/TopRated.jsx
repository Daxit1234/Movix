import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hook/useFetch';
import Carousel from '../../../components/carousel/Carousel';

function TopRated() {
    const [endpoint,setendpoint]=useState("movie")
    const {data,loading}=useFetch(`/${endpoint}/top_rated`)

    const onTabChange=(tab)=>{
        console.log("call")
        setendpoint(tab=="Movies"? "movie":"tv")
    }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>TopRated</span>
        <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default TopRated
