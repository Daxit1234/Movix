import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hook/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoading/img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import "./herobanner.scss"

function HeroBannerr() {
  const [backGround, setBackGround] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate()
  const { data, loading } = useFetch("/movie/upcoming")
  const { url } = useSelector(state => state.home)

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]
        ?.backdrop_path;
    setBackGround(bg)
  }, [data])


  const searchQueryHandle = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className="heroBanner">
     {!loading&& <div className="backdrop-img">
        <Img className="lazy-load-image-background" src={backGround}/>
      </div>}
      <div className="opacity-layer"></div>
      <ContentWrapper>
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className='title'>Well Come</span>
          <span className='subTitle'>
            Millions of Movie ,TV Shows and people
            to discover Expolore now
          </span>
          <div className="searchInput">
            <input type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search for Movie or TV Shows...'
              onKeyUp={searchQueryHandle} />
            <button>Search</button>
          </div>
        </div>
      </div>
      <div style={{height:5000}}></div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBannerr
