import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function App() {
  const [details,setDetails]=useState([])
  const fetchApi=async()=>{
    try {
      const response=await axios.request('https://randomuser.me/api/?page=1&results=1&seed=abc')
      // console.log(response.data.results)
      setDetails(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchApi()
  },[])
 

  
 
  return (
    <>
    <h1 className="text-center text-5xl">ID card</h1>
    <div>
      {details.map((value,index)=>(
        <div  className="card bg-red-500  h-96 ml-72" key={index}>
          <div className="flex pt-20">
             <div>
                <img className="image ml-12" src={value.picture.large}/>
             </div>
             <div className="text-center text-4xl text-white ml-24 mt-8">
                <span>{value.name.first}  </span>
                <span>{value.name.last}</span>
                <h1>{value.gender}</h1>
                <h1>{value.phone}</h1>
             </div>
          </div>
        </div>

      ))}
    </div>

    </>
  )
}

export default App
