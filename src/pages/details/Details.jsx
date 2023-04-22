import React from 'react'
import useFetch from '../../hook/useFetch'
import { useParams } from 'react-router-dom'
import "./Details.scss"
import DetailsBanner from './detailBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideoSection from './videoSection/VideoSection'
import Similar from './similar/Similar'
import Recommandation from './recommandation/Recommendations'

function Details() {
  const {mediaType,id}=useParams()
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`);
  const {data:credits,loading:creditsLoading}=useFetch(`/${mediaType}/${id}/credits`)
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]}  crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideoSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id}/>
      <Recommandation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details
