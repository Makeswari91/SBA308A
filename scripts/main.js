export function displayWeather(data, city) {
  const weather = data.weather[0].description;
  const temp = data.main.temp;
  document.getElementById('weather').innerHTML = `
    <h2>Weather in ${city}</h2>
    <p>${weather}, ${temp}°C</p>
  `;
}

export function showError(message) {
  document.getElementById('weather').innerHTML = `<p>Error: ${message}</p>`;
}
