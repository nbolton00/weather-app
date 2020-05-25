import React, {useState, useEffect} from 'react';
import './App.css';
import { TodaysWeather } from './components/TodaysWeather';
import { DailyWeather } from './components/DailyWeather';


//4fef9137ac3a7273bccae0afcc6a2f01
//lat 49.278997,
// lng  -123.119100

//

function App() {
  const [dailyWeather, setDailyWeather] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      fetch('https://api.openweathermap.org/data/2.5/onecall?lat=49.278997&lon=-123.119100&exclude=hourly&units=metric&appid=4fef9137ac3a7273bccae0afcc6a2f01')
        .then(response => response.json())
        .then(json => {
          console.log(json)
          setDailyWeather(json.daily.slice(1));
          setCurrentWeather(json.current);
        });
    };
    fetchData();
  }, []);

  const getDay = (timestamp) =>{
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; 
    const date = new Date(timestamp * 1000);
    return days[date.getDay()];
  }

  return (
    <div className="App">
      <div className="App-header">
        <TodaysWeather icon="10n" description="Well hot" temp="24°" feelslike="Feels like 28°"></TodaysWeather>
        
        <div className="dailyContainer">
            <h2>Next 7 days...</h2>
            <div className ="dailyWeather">

              {dailyWeather.map((day, index) => {
                return(
                  <DailyWeather key={`day-${index}`} day={getDay(day.dt)} icon={day.weather[0]['icon']} temp={Math.round(day.temp.max)}></DailyWeather>
                )
              })}

              {/* <DailyWeather day="Mon" icon="10n" temp="19°"></DailyWeather>
              <DailyWeather day="Tue" icon="10n" temp="19°"></DailyWeather>
              <DailyWeather day="Wed" icon="10n" temp="19°"></DailyWeather>
              <DailyWeather day="Thu" icon="10n" temp="19°"></DailyWeather>
              <DailyWeather day="Fri" icon="10n" temp="19°"></DailyWeather>
              <DailyWeather day="Sat" icon="10n" temp="19°"></DailyWeather>
              <DailyWeather day="Sun" icon="10n" temp="19°"></DailyWeather> */}
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
