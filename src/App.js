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
        <TodaysWeather icon="10n" description="Well hot" temp="24°" feelslike="Feels like 28°"></TodaysWeather>
        
        <div className="App-container">
            <h2>Next 7 days...</h2>
            <div className ="Weather-daily">
              <DailyWeather day="Mon" icon="10n" temp="19°"></DailyWeather>
              <DailyWeather day="Tue" icon="10n" temp="19°"></DailyWeather>
              <DailyWeather day="Wed" icon="10n" temp="19°"></DailyWeather>
              <DailyWeather day="Thu" icon="10n" temp="19°"></DailyWeather>
              <DailyWeather day="Fri" icon="10n" temp="19°"></DailyWeather>
              <DailyWeather day="Sat" icon="10n" temp="19°"></DailyWeather>
              <DailyWeather day="Sun" icon="10n" temp="19°"></DailyWeather>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
