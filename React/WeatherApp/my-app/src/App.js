import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const city1 = 'Rotterdam';
  const apiKey = '77bc13a3ad3deb011bf46df0dd99ca9b';
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey}`;

  const [weathercards, setWeathercards] = useState();

  const fetchData = async () => {
    const response = await axios.get(apiURL);

    setWeathercards(response.data);
  }

  // if(city1 !== ''){
  //   fetchData()
  // }


  return (
    <div>
      test

      <br></br>

      <a href={apiURL}>apiLink</a>
      {console.log(apiURL)};
     

      <div className='weathercard'  >
        <button onClick={fetchData}>fetch</button>
        {/* <h3>{weathercards.name}</h3> */}
        {console.log(weathercards)};


        

      </div>

    </div>

   

  )
}

export default App

