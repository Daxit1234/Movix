import { useEffect, useState } from 'react'
import {fetchDataFromApi} from "./utils/api"
function App() {

    useEffect(()=>{
        apitesting()
    },[])
    const apitesting=()=>{
      fetchDataFromApi("/movie/popular").then((res)=>{
        console.log("sndkn")
        console.log(res)
      })
    }
  
  return (
    <div className="App">
      App
    </div>
  )
}

export default App
