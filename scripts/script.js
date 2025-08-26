const apiKey = '6a02b5e57d5d17c6d0d96e7319cf1d88';
const city = 'California';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=California&appid=6a02b5e57d5d17c6d0d96e7319cf1d88&units=metric`)
  .then(response => response.json())
  .then(data => {
    const weather = data.weather[0].description;
    const temp = data.main.temp;
    document.getElementById('weather').innerHTML = `
      <h2>Weather in ${city}</h2>
      <p>${weather}, ${temp}°C</p>
    `;
  })
  .catch(error => console.error('Error fetching weather data:', error));
