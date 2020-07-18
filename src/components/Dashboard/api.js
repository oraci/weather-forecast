export const getWeatherApi = (city) => {
  const uriEncodedCity = encodeURIComponent(city);

  const weatherURL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${uriEncodedCity}&mode=json&units=metric&cnt=7&appid=08386da1df4f62f3426794b77cce7146`;
  // `http://api.openweathermap.org/data/2.5/forecast?q=${uriEncodedCity}&mode=json&units=metric&appid=08386da1df4f62f3426794b77cce7146`
  // `https://api.openweathermap.org/data/2.5/forecast?q=${uriEncodedCity}&appid=b1b15e88fa797225412429c1c50c122a1`
  return fetch(weatherURL)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod !== '200') {
        return [];
      }

      return data;
    })
    .catch(() => {
      return [];
    });
};
