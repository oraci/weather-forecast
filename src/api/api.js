const endpoint =
  '//api.openweathermap.org/data/2.5/forecast/daily?q=blumenau&mode=json&units=metric&cnt=5&appid=08386da1df4f62f3426794b77cce7146api.openweathermap.org/data/2.5/forecast?q={blumenau}&appid={d22af0ea15e169c940a92e023d2fee2b}';

const fetchWeather = () => fetch(endpoint);

export default {
  fetchWeather,
};
