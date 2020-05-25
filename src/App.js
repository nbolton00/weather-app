import React from 'react';
import './App.css';
import { TodaysWeather } from './components/TodaysWeather';
import { DailyWeather } from './components/DailyWeather';

//4fef9137ac3a7273bccae0afcc6a2f01
//lat 49.278997,
// lng  -123.119100

//https://api.openweathermap.org/data/2.5/onecall?lat=49.278997&lon=-123.119100&appid=4fef9137ac3a7273bccae0afcc6a2f01

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-container">
          <TodaysWeather icon="icon" temp="18" summary="Hot" description="Well hot"></TodaysWeather>
          <div>
            <DailyWeather day="Monday" temp="20" icon="icon"></DailyWeather>
            <DailyWeather day="Tuesday" temp="18" icon="icon"></DailyWeather>
            <DailyWeather day="Wednesday" temp="17" icon="icon"></DailyWeather>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
