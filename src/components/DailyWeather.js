import React from 'react';

export const DailyWeather = (props) => {
    const iconImageUrl = `../../icons/${props.icon}.svg`;
    return (
        <div className="dailyItem">
            <p>{props.day}</p>
            <img src={iconImageUrl} alt={props.description} />
            <p>{props.temp}</p>
        </div>
    )
}