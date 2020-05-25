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
        <TodaysWeather icon="icon" temp="18" summary="Hot" description="Well hot"></TodaysWeather>
        <div className="App-container">
            <h2>Next 7 days...</h2>
            <DailyWeather day="Mon" temp="20" icon="icon"></DailyWeather>
            <DailyWeather day="Tue" temp="18" icon="icon"></DailyWeather>
            <DailyWeather day="Wed" temp="17" icon="icon"></DailyWeather>
            <DailyWeather day="Thu" temp="20" icon="icon"></DailyWeather>
            <DailyWeather day="Fri" temp="18" icon="icon"></DailyWeather>
            <DailyWeather day="Sat" temp="17" icon="icon"></DailyWeather>
            <DailyWeather day="Sun" temp="17" icon="icon"></DailyWeather>
        </div>
      </div>
      
    </div>
  );
}

export default App;
