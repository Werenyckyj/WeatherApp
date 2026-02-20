const searchBtn = document.getElementById('search-btn');
const locationInput = document.getElementById('location-input');
const apiKey = 'b54e50b5c99b41d289f100754262002';
const forecastUrl = 'https://api.weatherapi.com/v1/forecast.json';
const currentWeatherUrl = 'https://api.weatherapi.com/v1/current.json';

searchBtn.addEventListener('click', async () => {
    const location = locationInput.value.trim();
    
    if (!location) {
        console.warn('Please enter a location');
        return;
    }

    const weatherData = await getCurrentWeather(location);
    const forecastData = await getForecast(location);
    
});

async function getCurrentWeather(location) {
    try {
        const response = await fetch(`${currentWeatherUrl}?key=${apiKey}&q=${encodeURIComponent(location)}`);
        
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Current weather data:', data);
        
        return data;
    } catch (error) {
        console.error('Failed to retrieve current weather:', error);
    }};

async function getForecast(location) {
    try {
        const response = await fetch(`${forecastUrl}?key=${apiKey}&q=${encodeURIComponent(location)}&days=5&aqi=no`);
        
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Forecast data:', data);
        
        return data;
    } catch (error) {
        console.error('Failed to retrieve forecast:', error);
    }};