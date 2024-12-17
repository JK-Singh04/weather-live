import React from 'react';

const WeatherSearch = ({ fetchWeatherByCity, setLocation }) => {
    const handleLocationAccess = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                () => alert('Geolocation not supported or permission denied')
            );
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        if (city) {
            fetchWeatherByCity(city);
        }
    };

    return (
        <div className="weather-container">
            <div className="sub-container grant-location-container">
                <img src="/images/location.png" width="80" height="80" alt="location icon" />
                <p>Grant Location Access</p>
                <button className="btn" onClick={handleLocationAccess}>Grant Access</button>
            </div>

            <form className="form-container" onSubmit={handleSearchSubmit}>
                <input placeholder="Search for City..." name="city" />
                <button className="btn" type="submit">
                    <img src="/images/search.png" width="20" height="20" alt="search icon" />
                </button>
            </form>
        </div>
    );
};

export default WeatherSearch;
