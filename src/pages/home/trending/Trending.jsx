import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import { fetchDataFromApi } from '../../../utils/api';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hook/useFetch';
import Carousel from '../../../components/carousel/Carousel';

function Trending() {
    const [endpoint,setendpoint]=useState("day")
    const {data,loading}=useFetch(`/trending/all/${endpoint}`)

    const onTabChange=(tab)=>{
        console.log("call")
        setendpoint(tab=="Day"? "day":"week")
    }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Trending</span>
        <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending
