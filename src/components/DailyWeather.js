import React from 'react';
import styled from "styled-components";
// import { defaultTheme } from "../utils";
// import { typeScale } from "../utils";


const WeatherContainer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const DailyHeader = styled.div`
    width:70%;
`;
const DailyIcon = styled.div`
    width:15%;
`;
const DailyTemp = styled.div`
    width:15%;
`;


export const DailyWeather = (props) => {
    return (
        <WeatherContainer>
            <DailyHeader>{props.day}</DailyHeader>
            <DailyTemp>{props.temp}</DailyTemp>
            <DailyIcon>{props.icon}</DailyIcon>
        </WeatherContainer>
    )
}