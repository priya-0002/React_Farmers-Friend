import React from 'react';
import {useEffect,useState} from 'react'
import"./featureb.css"
import humidity from '../assets/humidity.gif'
import sunny from '../assets/sunny.gif'
import min from '../assets/min.gif'
import pressure from '../assets/pressure.gif'
import max from '../assets/max.gif'
import temp from '../assets/temp.gif'
import rainy from '../assets/rainy.gif'


function FeaturesBlocks() {
  const [weather,setWeather]=useState(null)
    const [search,setSearch]=useState("pune")
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7a4224bd8bcaeb775ccdf914dbf751c3`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setWeather(data.main)
            console.log(weather)
        })
           
        
    }, [search])
   

    
    const atmosphere=(e)=>{
        setSearch(e.target.value)
        console.log(search)     
    }
  return (
    
    
    
    <section className="relative">
      <br />
      <br />
      
    
     
      
      

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          
        
          <div className="container">
  <input type="text" placeholder="Search city.."  name="search" onChange={atmosphere}/>
 
  <div className="search"></div>
</div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4"> Weather Prediction</h2>
            </div>
          <br />
          <br />
      <br />
      <br />
      <br />
          <br />
      <br />
     
        
         
          {!weather?<p>No data found: </p>: <div>  {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
             <img className="weather" src={temp} alt="" />
              <h4 style={{color: "blue"}} className="text-xl font-bold leading-snug tracking-tight mb-1">{weather.temp}</h4>
              <p className="text-gray-600 text-center">Seems like light a day.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="weather" src={humidity} alt="" />
              <h4 style={{color: "blue"}}className="text-xl font-bold leading-snug tracking-tight mb-1">{weather.humidity}</h4>
              <p className="text-gray-600 text-center">Seems like humidity .</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="weather" src={rainy} alt="" />
              <h4 style={{color: "blue"}}className="text-xl font-bold leading-snug tracking-tight mb-1">{weather.feels_like}</h4>
              <p className="text-gray-600 text-center">Seems like changes in the air 
              .</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="weather" src={pressure} alt="" />        
              <h4 style={{color: "blue"}} className="text-xl font-bold leading-snug tracking-tight mb-1">{weather.pressure}</h4>
              <p className="text-gray-600 text-center">Seems like heavy atmosphere.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="weather" src={max} alt="" />
              <h4 style={{color: "blue"}} className="text-xl font-bold leading-snug tracking-tight mb-1">{weather.temp_max}</h4>
              <p className="text-gray-600 text-center">Seems like it is a sunny day.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="weather" src={min} alt="" />
              <h4  style={{color: "blue"}}className="text-xl font-bold leading-snug tracking-tight mb-1">{weather.temp_min}</h4>
              <p className="text-gray-600 text-center">Seems like it is gonna rain.</p>
            </div>

          </div>
 </div> }
         
        </div>
      </div>
      <br />
      <br />
      
    </section>
  
  );
}

export default FeaturesBlocks;
