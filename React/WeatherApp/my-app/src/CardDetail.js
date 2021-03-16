import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuidv4';


const CardDetail = ({ lat, lon }) => {

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

  const d = new Date(date*1000);
  const n = d.toLocaleDateString();
  // console.log(n);

  // console.log(date);

  return (
    <div className='weathercard'>
      {/* {weatherDetail && (
        <div>
          <p>Datum: {n}</p>

        </div>
      )} */}

      {date && 
        date.map((datum, index) => {

        return (
        <div key='{uuid}'>
          <p>Datum: {datum.index}</p>
          {console.log(index)}
        </div>
        );
      })}

    </div>
  )
}

export default CardDetail