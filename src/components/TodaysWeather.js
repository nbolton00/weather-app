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
    return (
        <div>
            
            <p>{props.icon}</p>
            <p>{props.description}</p>
            <p>{props.temp}</p>
            <p>{props.feelslike}</p>
        </div>
    )
}