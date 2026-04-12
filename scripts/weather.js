// ----------------------------------------------
// STATE VARIABLES
// ----------------------------------------------
let is_loading = false;
let error_message = "";
let weather_data = null;

const output_element = document.getElementById("weather-output");

// ----------------------------------------------
// RENDER FUNCTION
// ----------------------------------------------
function renderWeather() {
  if (is_loading) {
    output_element.className = "loading";
    output_element.innerHTML = "Loading...";
    return;
  }

  if (error_message) {
    output_element.className = "error";
    output_element.innerHTML = error_message;
    return;
  }

  if (weather_data) {
    const current = weather_data.properties.periods[0];

    output_element.className = "";
    output_element.innerHTML = `
            <div class = "temp">${current.temperature}&deg;</div>
            <div class = "forecast">${current.shortForecast}</div>
        `;
    return;
  }

  output_element.innerHTML = "Weather data not available.";
}

// ----------------------------------------------
// FETCH FUNCTION
// ----------------------------------------------
async function getWeatherData() {
  is_loading = true;
  error_message = "";
  renderWeather();

  try {
    const response = await fetch(
      "https://api.weather.gov/gridpoints/MSO/105,131/forecast",
    );

    // Handle HTTP errors
    if (!response.ok) {
      throw new Error("Failed to fetch weather data.");
    }

    const data = await response.json();

    // Save data
    weather_data = data;

    console.log(data);
  } catch (error) {
    error_message = error.message;
    weather_data = null;
  } finally {
    is_loading = false;
    renderWeather();
  }
}

// ----------------------------------------------
// MAIN PROGRAM EXECUTION
// ----------------------------------------------
getWeatherData();
