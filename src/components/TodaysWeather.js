import React from 'react';

export const TodaysWeather = (props) => {
    const iconImageUrl = `../../icons/${props.icon}.svg`;
    return (
        <div className="weatherToday">
            <div className="todaysDate">
                <h2>{props.day} {props.date}</h2>
                <p>Today in Vancouver, BC</p>
            </div>
            <div className="todaysIcon">
                <img src={iconImageUrl} alt={props.description}/>
                <p>{props.description}</p>
            </div>
            <div className="todaysTemp">
                <h3 className="display">{props.temp}°</h3>
                <p>Feels like {props.feelslike}°</p>
            </div>
        </div>
    )
}
