import React, {useState} from 'react';
import axios from 'axios';
import CardDetail from './CardDetail'

const Card = ({city}) => {
    // const city = [];
    const apiKey = '77bc13a3ad3deb011bf46df0dd99ca9b';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const [weathercards, setWeathercards] = useState();
  
  
    const fetchData = async () => {
      const response = await axios.get(apiURL);
  
      setWeathercards(response.data);
    //   console.log(response);
    }

    console.log(weathercards);

    return(
        <div>
        
            <div className='weathercard' >
              <button onClick={fetchData}>fetch</button>
              {weathercards && (
                <div>
                  <h1>{weathercards.name}</h1>
                  <img className='icon' src={`http://openweathermap.org/img/wn/${weathercards.weather[0].icon}@2x.png`} alt='icon' ></img>
                  <h2>{weathercards.main.temp} &deg;C</h2>
                  <h3>Min temp: {weathercards.main.temp_min} &deg;C</h3>
                  <h3>Max temp: {weathercards.main.temp_max} &deg;C</h3>
                  <h3>Vochtigheid: {weathercards.main.humidity}%</h3>
                  <br></br>
                  <button>Details</button>
                </div>             
                              
              )}

            </div>
       
      </div>
    
    )
}



export default Card




    