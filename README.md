# 🌤️ Weather App

A responsive and modern **Weather Application** built using **HTML, CSS, and JavaScript**. The application fetches real-time weather information from the Open-Meteo API and displays the current weather conditions along with a 5-day forecast for a selected city.

## 🚀 Live Demo

**GitHub Pages:**
`https://rajamani01.github.io/weather-app/`

## 📌 Features

* 🔍 Search weather by city name
* 🌡️ Display current temperature
* ☁️ Display current weather condition
* 💧 Display humidity
* 💨 Display wind speed
* 📅 Display 5-day weather forecast
* 🌦️ Weather icons based on weather conditions
* 📱 Fully responsive design
* 🎨 Modern light-blue and white UI
* ⚡ Real-time data from Weather API
* ❌ Error handling for invalid cities

## 🛠️ Technologies Used

| Technology     | Purpose                                             |
| -------------- | --------------------------------------------------- |
| HTML5          | Creates the structure of the application            |
| CSS3           | Provides styling, colors, layout and responsiveness |
| JavaScript     | Handles API requests and application logic          |
| Open-Meteo API | Provides weather and forecast data                  |
| GitHub Pages   | Hosts the application                               |

## 🌐 API Used

This project uses the **Open-Meteo API** to retrieve weather information.

Two API services are used:

### 1. Geocoding API

The geocoding API converts the entered city name into geographical coordinates.

City Name
   ↓
Latitude + Longitude

### 2. Weather API

The latitude and longitude are then used to retrieve weather information.

Latitude + Longitude
        ↓
Weather API
        ↓
Temperature
Humidity
Wind Speed
Weather Condition
5-Day Forecast

## 📂 Project Structure

weather-app/
│
├── index.html
├── style.css
├── script.js
└── README.md

## ⚙️ How the Application Works

User enters city
       ↓
JavaScript reads city name
       ↓
Geocoding API finds coordinates
       ↓
Latitude and longitude obtained
       ↓
Weather API is called
       ↓
Weather data received as JSON
       ↓
JavaScript processes the data
       ↓
Current weather displayed
       ↓
5-day forecast displayed

## 🎨 Design

The application uses a modern color combination:

* Light Blue
* Sky Blue
* Deep Blue
* White
* Soft Purple

The interface uses rounded cards, gradients, shadows and glass-like effects to provide a clean weather-dashboard appearance.

## 🔑 API Key

No API key is required for this project because Open-Meteo provides access to the required weather and geocoding endpoints without requiring an API key for this application.

## 📸 Main Functions

### Current Weather

Displays:

* City name
* Country
* Temperature
* Weather condition
* Weather icon
* Humidity
* Wind speed

### 5-Day Forecast

Displays:
* Day
* Weather condition
* Weather icon
* Maximum temperature
* Minimum temperature

## 🔮 Future Improvements

The application can be extended with:

* 📍 Current location detection
* 🌙 Dark mode
* ⭐ Favorite cities
* 🕒 Search history
* 🌡️ Celsius/Fahrenheit switch
* 🌅 Sunrise and sunset information
* 🌧️ Hourly weather forecast
* 🌍 Multiple location comparison
* 🔔 Weather alerts
* 📊 Weather charts

## 👨‍💻 Author

RAJAMANI S

