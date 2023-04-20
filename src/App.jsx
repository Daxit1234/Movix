import { useEffect, useState } from 'react'
import {fetchDataFromApi} from "./utils/api"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'
import NotFound from './pages/404/NotFound'
import Explore from './pages/explore/Explore'
import Header from './components/header/Header'
import Footer from "./components/footer/Footer"
function App() {
    const dispatch=useDispatch() 
    const url=useSelector((state)=>state.home.url) 

    useEffect(()=>{
        fetchApiConfig()
    },[])
    const fetchApiConfig=()=>{
      fetchDataFromApi("/configuration").then((res)=>{
        console.log(res)
        const url={
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }
        dispatch(getApiConfiguration(url))
      })
    }
  
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/:mediaType/:id' element={<Details />} />
      <Route path='/search/:query' element={<SearchResult/>} />
      <Route path='/explore/:mediaType' element={<Explore/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
