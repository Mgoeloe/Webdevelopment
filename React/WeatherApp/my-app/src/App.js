import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const city = ['Den Haag', 'Rome'];
  const apiKey = '77bc13a3ad3deb011bf46df0dd99ca9b';
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const [weathercards, setWeathercards] = useState();


  const fetchData = async () => {
    const response = await axios.get(apiURL);

    setWeathercards(response.data);
  }

  // if(city1 !== ''){
  //   fetchData()
  // }

  // if(weathercards.name === ''){
  //   fetchData()
  // }
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(apiURL);
  
  //     setWeathercards(response.data);
  //   }
  // });




  return (
    <div  >
      test

      <br></br>

      <a href={apiURL}>apiLink</a>
      {console.log(apiURL)};


      <div className='weathercard'   >
        <button onClick={fetchData}>fetch</button>
        {weathercards && <h3>{weathercards.name}</h3>}
        {weathercards && <h3>{weathercards.main.temp} &deg;C</h3>}
        {weathercards && <h3>Icon: {weathercards.weather.icon}</h3>}
        {weathercards && <h3>Min temp: {weathercards.main.temp_min} &deg;C</h3>}
        {weathercards && <h3>Max temp: {weathercards.main.temp_max} &deg;C</h3>}
        {weathercards && <h3>Vochtigheid: {weathercards.main.humidity}%</h3>}
        {weathercards && <img className='icon' src={`http://openweathermap.org/img/wn/${weathercards.weather[0].icon}@2x.png`} alt='icon' ></img>}
          
        {console.log(weathercards)}
        
      </div>

    </div>


      // <div>
      //   {city && city.map((stad, index) => {
      //     return (
      //       <div className='weathercard' key={index}>
      //         <button onClick={fetchData}>fetch</button>
      //         {/* <h3>{weathercards.name}</h3> */}
      //         {weathercards && (
      //           <h3>{weathercards.name}</h3>
                
                
      //         )}

      //       </div>
      //     );           
      //   })}
      // </div>



  )
}

export default App

