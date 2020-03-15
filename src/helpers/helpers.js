import sunny from '../assets/sunny.png';
import cloudy from '../assets/cloudy.png';
import rain from '../assets/rain.png';

export const icons = {
  Clouds: cloudy,
  Rain: rain,
  Clear: sunny
}

const getDate = (dt) => {
  return new Date(dt * 1000);
}

export const getWeekDay = (dt) => {
  const days = ['DOM','SEG','TER','QUA','QUI','SEX','SAB'];

  return days[getDate(dt).getDay()];
}

export const getHour = (dt) => {
  return `${getDate(dt).getHours()}:${getDate(dt).getMinutes()}`;
}

export const getMonth = (dt) => {
  const months = ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

  return months[getDate(dt).getMonth()];
}

export const getYear = (dt) => {
  return getDate(dt).getFullYear();
}