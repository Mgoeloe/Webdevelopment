import React, {useState, useEffect} from 'react';
import axios from 'axios';


const CardDetail = ({lat, lon}) => {

    const apiKey = '77bc13a3ad3deb011bf46df0dd99ca9b';
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${apiKey}`;
  
    const [weatherDetail, setWeatherDetail] = useState(null);
  

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const response = await axios.get(apiURL);
  
      setWeatherDetail(response.data);
      console.log(response);}

    // console.log(weatherDetail);
    
    // const d = new Date(weatherDetail.daily[0].dt*1000);
    // const n = d.toLocaleDateString();
    // console.log(n);



    return (
        <div className='weathercard'>        
          {weatherDetail && (
            <div>
              <p>Datum: {weatherDetail.current.dt}</p>
              
            </div>
          )}
            
        </div>
    )
}

export default CardDetail