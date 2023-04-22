import "./SearchResult.scss"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
// import MovieCard from "../../components/movieCard/MovieCard";
// import Spinner from "../../components/spinner/Spinner";
import noResults from "../../assets/no-results.png";
import Spinner from "../../components/spinner/Spinner";
function SearchResult() {
  const [data,setData]=useState(null)
  const [pageNum,setPageNum]=useState(1)
  const [loding,setLoding]=useState(false)
  const {query}=useParams()

  const fetchInitialData=()=>{
    setLoding(true)
    fetchDataFromApi(`/search/multi?quary=${query}&page=${pageNum}`).then((res)=>{
      setData(res)
      setPageNum((prev)=>prev+1);
      setLoding(false)
    })
  }
  const fetchNextData=()=>{
    fetchDataFromApi(`/search/multi?quary=${query}&page=${pageNum}`).then((res)=>{
      if(data?.results){
        setData({
          ...data,results:[...data?.results,...res.results]
        })
      }
      else{
        setData(res)
      }
      setPageNum((prev)=>prev+1);
    })
  }

  useEffect(()=>{
    fetchInitialData()
  },[])

  return (
    <div className="searchResultsPage">
      {!loding ?(
        <ContentWrapper>
          {data.results.length>0?(
            <>
              <div className="pageTitle">
                {`Search ${data.total_results>1?"results":"result"} of ${query}`}
              </div>
            </>
          ):
            <span className="resultsNotFound">
              sorry Results not found
            </span>
          }
        </ContentWrapper>
      ):
      <Spinner initial={true}/>
      }
    </div>
  )
}

export default SearchResult
