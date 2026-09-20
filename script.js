const weatherCodes = {
    0: ["Clear Sky", "☀️"],
    1: ["Mainly Clear", "🌤️"],
    2: ["Partly Cloudy", "⛅"],
    3: ["Overcast", "☁️"],
    45: ["Fog", "🌫️"],
    48: ["Fog", "🌫️"],
    51: ["Light Drizzle", "🌦️"],
    53: ["Drizzle", "🌦️"],
    55: ["Heavy Drizzle", "🌧️"],
    61: ["Light Rain", "🌦️"],
    63: ["Rain", "🌧️"],
    65: ["Heavy Rain", "🌧️"],
    71: ["Light Snow", "🌨️"],
    73: ["Snow", "❄️"],
    75: ["Heavy Snow", "❄️"],
    80: ["Rain Showers", "🌦️"],
    81: ["Rain Showers", "🌧️"],
    82: ["Heavy Rain Showers", "⛈️"],
    95: ["Thunderstorm", "⛈️"],
    96: ["Thunderstorm", "⛈️"],
    99: ["Thunderstorm", "⛈️"]
};

async function getWeather() {

    const city = document.getElementById("cityInput").value.trim();
    const error = document.getElementById("error");

    error.textContent = "";

    if (city === "") {
        error.textContent = "Please enter a city name.";
        return;
    }

    try {

        // Step 1: Find city coordinates
        const geoURL =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        const geoResponse = await fetch(geoURL);
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            error.textContent = "City not found.";
            return;
        }

        const location = geoData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;

        // Step 2: Get weather information
        const weatherURL =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=5`;

        const weatherResponse = await fetch(weatherURL);
        const data = await weatherResponse.json();

        // Step 3: Display current weather
        displayCurrentWeather(location, data);

        // Step 4: Display forecast
        displayForecast(data);

    } catch (err) {

        console.error(err);
        error.textContent = "Unable to fetch weather data.";

    }
}


function displayCurrentWeather(location, data) {

    document.getElementById("cityName").textContent =
        `${location.name}, ${location.country}`;

    document.getElementById("temperature").textContent =
        `${Math.round(data.current.temperature_2m)}°C`;

    document.getElementById("humidity").textContent =
        `${data.current.relative_humidity_2m}%`;

    document.getElementById("wind").textContent =
        `${data.current.wind_speed_10m} km/h`;

    const weatherCode = data.current.weather_code;

    const weatherInfo =
        weatherCodes[weatherCode] || ["Unknown", "🌍"];

    document.getElementById("condition").textContent =
        weatherInfo[0];

    document.getElementById("currentIcon").textContent =
        weatherInfo[1];
}


function displayForecast(data) {

    const forecastContainer =
        document.getElementById("forecast");

    forecastContainer.innerHTML = "";

    for (let i = 0; i < 5; i++) {

        const date = new Date(data.daily.time[i]);

        const day = date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        const weatherCode = data.daily.weather_code[i];

        const weatherInfo =
            weatherCodes[weatherCode] || ["Unknown", "🌍"];

        const maxTemp =
            Math.round(data.daily.temperature_2m_max[i]);

        const minTemp =
            Math.round(data.daily.temperature_2m_min[i]);

        const card = document.createElement("div");

        card.className = "forecast-card";

        card.innerHTML = `
            <h3>${day}</h3>
            <div class="icon">${weatherInfo[1]}</div>
            <p>${weatherInfo[0]}</p>
            <p class="temp">${maxTemp}°C / ${minTemp}°C</p>
        `;

        forecastContainer.appendChild(card);
    }
}


// Press Enter to search
document.getElementById("cityInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        getWeather();
    }

});