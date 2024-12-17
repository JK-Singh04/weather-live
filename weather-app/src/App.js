import React, { useState, useEffect } from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherSearch from './components/WeatherSearch';

const API_KEY = "168771779c71f3d64106d8a88376808a";

function App() {
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (location) {
            fetchWeatherByLocation(location.lat, location.lon);
        }
    }, [location]);

    const fetchWeatherByLocation = async (lat, lon) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            setWeather(data);
        } catch (err) {
            console.error("Error fetching weather:", err);
        }
    };

    const fetchWeatherByCity = async (city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            setWeather(data);
        } catch (err) {
            console.error("Error fetching weather:", err);
        }
    };

    return (
        <div className="wrapper">
            <h1>Weather App</h1>
            <WeatherSearch fetchWeatherByCity={fetchWeatherByCity} setLocation={setLocation} />
            {weather && <WeatherInfo weather={weather} />}
        </div>
    );
}

export default App;
