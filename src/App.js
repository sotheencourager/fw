import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import CustomButton from './compo/frieghtWiseButton' 


function App() {

  //initializing variables and setting data
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [city, setCity] = useState(''||'Brentwood');
  //const city = 'Brentwood';
  const apiKey = process.env.API_CODE;
  const [clickText, setClickText] = useState(false);
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  

  //fetching weather data using axios
  const fetchWeather = async () => {
   
    try 
    {
      if(city == null || city == '' || city.length < 2)
      {
          
      setError('Please enter a valid city.');
      }
      else{
        const response = await axios.get(apiUrl);
      setWeather(response.data);

      }
      
    } 
    catch (error) {
      setError('Oh no! Something went wrong. Ensure you enter a valid city name and have the correct access.');
      setWeather(null);
    }
  };

  const onChangeFunction = (event) => {
    setCity(event.target.value);
  };

  const RunTest = (e) => {
    e.preventDefault();
    setClickText(true);
  };

  return (
    <div className="App">
     
      <div className="App">
      <h1>Weather App</h1>
      <p>
          Ok...this is a quick app to get the job done under 2 hours.<br></br>..and ensure quality is not compromised.
        </p>
      
      <input
      hidden
        type="text"
        placeholder="Enter city name"
        value='Brentwood'
        onChange={onChangeFunction}
      />
      <CustomButton
        value={city}
        label="Get the Brentwood Weather"
        onClick={fetchWeather}
      />

      <br></br>or <br></br>
      <input
        type="text"
        placeholder="Enter city name"
        value={city || ''}
        onChange={onChangeFunction}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
      <br></br>

      <a href="#" onClick={RunTest}>Click me to Test</a>
      {clickText && <p>The test has begun. Check your console.</p>}
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Test
        </a> */}
    </div>
    </div>
  );
}

export default App;
