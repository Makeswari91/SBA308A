import { getWeather } from './script.js';
import { displayWeather, showError } from './main.js';

document.getElementById('searchForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = document.getElementById('cityInput').value;
  try {
    const data = await getWeather(city);
    displayWeather(data, city);
  } catch (error) {
    showError(error.message);
  }
});
