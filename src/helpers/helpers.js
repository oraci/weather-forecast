import sunny from '../assets/sunny.png';
import cloudy from '../assets/cloudy.png';
import rain from '../assets/rain.png';

export const icons = {
  Clouds: cloudy,
  Rain: rain,
  Clear: sunny
}

export const getWeekDay = (dt) => {
  const days = ['DOM','SEG','TER','QUA','QUI','SEX','SAB'];
  const date = new Date(dt * 1000);

  return days[date.getDay()];
}

export const getHour = (dt) => {
  const date = new Date(dt * 1000);

  return date.getHours() + ":" + date.getMinutes();
}