import React from 'react';

const WeatherInfo = ({ weather }) => {
    const {
        name,
        sys: { country },
        weather: [{ description, icon }],
        main: { temp, humidity },
        wind: { speed },
        clouds: { all: cloudiness },
    } = weather;

    return (
        <div className="user-info-container active">
        <div className="leftElements">
            <div className="name">
                <p>{name}, {country}</p>
                <img src={`https://flagcdn.com/144x108/${country.toLowerCase()}.png`} alt="country flag" />
            </div>
            <p className="description">{description}</p>
            <img className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon" />
            <p className="temperature">{temp} °C</p>
        </div>
        <div className="rightElements">
            <div className="parameter">
                <img src="/images/wind.png" alt="wind icon" />
                <p>Windspeed</p>
                <p>{speed} m/s</p>
            </div>
            <div className="parameter">
                <img src="/images/humidity.png" alt="humidity icon" />
                <p>Humidity</p>
                <p>{humidity}%</p>
            </div>
            <div className="parameter">
                <img src="/images/cloud.png" alt="cloud icon" />
                <p>Cloudiness</p>
                <p>{cloudiness}%</p>
            </div>
        </div>
    </div>
    
    );
};

export default WeatherInfo;
