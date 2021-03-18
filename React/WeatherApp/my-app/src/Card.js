import React, {useState} from 'react';
import axios from 'axios';
import CardDetail from './CardDetail'

const Card = ({city}) => {
    // const city = [];
    const apiKey = '77bc13a3ad3deb011bf46df0dd99ca9b';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const [weathercards, setWeathercards] = useState();
    const [cardLon, setCardLon] = useState();
    const [cardLat, setCardLat] = useState();
    const [toggleState, setToggleState] = useState(null);

    const toggle = () => {
      setToggleState(!toggleState);
    }
  
  
    const fetchData = async () => {
      const response = await axios.get(apiURL);
  
      setWeathercards(response.data);
      setCardLon(response.data.coord.lon);
      setCardLat(response.data.coord.lat);
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
                  <img className='icons' src={`http://openweathermap.org/img/wn/${weathercards.weather[0].icon}@4x.png`} alt='icon' ></img>
                  <h2>{weathercards.main.temp} &deg;C</h2>
                  <h3>Min temp: {weathercards.main.temp_min} &deg;C</h3>
                  <h3>Max temp: {weathercards.main.temp_max} &deg;C</h3>
                  <h3>Vochtigheid: {weathercards.main.humidity}%</h3>
                  <br></br>
                  <button onClick={toggle}>Details</button>

                  <div className='toggle'>
                    {toggleState ? <CardDetail lat={cardLat} lon={cardLon} name={weathercards.name}/> : null}
                  </div>

                  {/* {console.log(weathercards.coord.lon)} */}
                  {/* {console.log(weathercards.coord.lat)} */}
                  {console.log(cardLon, cardLat)}
                </div>             
                              
              )}

            </div>
       
      </div>
    
    )
}



export default Card




    