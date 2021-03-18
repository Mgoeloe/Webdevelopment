import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuidv4';
import Collapsible from 'react-collapsible';
import './CardDetails.css'


const CardDetail = ({ lat, lon, name }) => {

  const apiKey = '77bc13a3ad3deb011bf46df0dd99ca9b';
  const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${apiKey}`;

  const [weatherDetail, setWeatherDetail] = useState();
  const [date, setDate] = useState();

  const { uuid } = require('uuidv4');

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const response = await axios.get(apiURL);

    setWeatherDetail(response.data);
    setDate(response.data.daily);
    // console.log(response);
  }

  console.log(weatherDetail);
  console.log(date);

  return (
    <div className='detailCard'>
      <h1>{name}</h1>
 
      {date && 
        date.map((datum, index) => {
          const d = new Date(datum.dt*1000);
          const n = d.toLocaleDateString();
          console.log(d, n);

        return (
        <div key={uuid()}>
          <Collapsible trigger={<div> {n} <img className='icons2' 
              src={`http://openweathermap.org/img/wn/${datum.weather[0].icon}.png`} alt='icon' ></img>
              {datum.temp.day} &deg;C &dArr;</div>}
          >
      
          <div className='tableDiv'>
            <table>
              <tr>
                <td></td>
                <td>Morning</td>
                <td>Afternoon</td>
                <td>Evening</td>
                <td>Night</td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>{datum.temp.morn}&deg;C</td>
                <td>{datum.temp.day}&deg;C</td>
                <td>{datum.temp.eve}&deg;C</td>
                <td>{datum.temp.night}&deg;C</td>
              </tr>
            </table>
          </div>
          

            
          </Collapsible>

          
          {console.log(index, datum.dt)}

        </div>
        );
      })}

    </div>
  )
}

export default CardDetail