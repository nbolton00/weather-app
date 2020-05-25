import React from 'react';
import styled from "styled-components";
// import { defaultTheme } from "../utils";
// import { typeScale } from "../utils";


const WeatherContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-right: 1px dotted #dfe3e8;
    padding: 0 1.2rem;
    &:last-child {
        border-right: none;
    }
`;

const DailyHeader = styled.div`
    text-transform: uppercase;
`;
const DailyIcon = styled.img`
    margin:.75rem 0;
`;
const DailyTemp = styled.div`
`;


export const DailyWeather = (props) => {
    const iconImageUrl = `../../${props.icon}.svg`;
    return (
        <WeatherContainer>
            <DailyHeader>{props.day}</DailyHeader>
            <DailyIcon src={iconImageUrl} alt={props.summary} />
            <DailyTemp>{props.temp}</DailyTemp>
        </WeatherContainer>
    )
}