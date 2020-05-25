import React from 'react';
import styled from "styled-components";
import { defaultTheme } from "../utils";
import { typeScale } from "../utils";

const WeatherContainer = styled.div`
    color:  ${defaultTheme.textColor};
    font-size: ${typeScale.paragraph};
    font-family: ${defaultTheme.primaryFont};
`;

export const TodaysWeather = (props) => {
    return (
        <WeatherContainer>
            <p>{props.icon}</p>
            <p>{props.temp}</p>
            <h1>{props.summary}</h1>
            <p>{props.description}</p>
        </WeatherContainer>
    )
}