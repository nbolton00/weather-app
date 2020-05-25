import React from 'react';
// import styled from "styled-components";
// import { defaultTheme } from "../utils";
// import { typeScale } from "../utils";

// const WeatherContainer = styled.div`
//     color:  ${defaultTheme.textColor};
//     font-size: ${typeScale.paragraph};
//     font-family: ${defaultTheme.primaryFont};
// `;

export const TodaysWeather = (props) => {
    const iconImageUrl = `../../${props.icon}.svg`;
    return (
        <div className="weatherToday">
            <div className="todaysDate">
                <h2>Sun 24</h2>
                <p>Today in Vancouver, BC</p>
            </div>
            <div className="todaysIcon">
                <img src={iconImageUrl} alt={props.summary}/>
                <p>{props.description}</p>
            </div>
            <div className="todaysTemp">
                <h3 className="display">{props.temp}</h3>
                <p>{props.feelslike}</p>
            </div>
        </div>
    )
}
