import sunny from '../assets/sunny.png';
import cloudy from '../assets/cloudy.png';
import rain from '../assets/rain.png';

export const icons = {
  Clouds: cloudy,
  Rain: rain,
  Clear: sunny,
};

const getDate = (dt) => {
  return new Date(dt * 1000);
};

export const getWeekDay = (dt) => {
  const days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

  return days[getDate(dt).getDay()];
};

export const getHour = (dt) => {
  const hours = getDate(dt).getHours();
  const minutes = `0${getDate(dt).getMinutes()}`.slice(-2);

  return `${hours}:${minutes}`;
};

export const getMonth = (dt) => {
  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Maio',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];

  return months[getDate(dt).getMonth()];
};

export const getYear = (dt) => {
  return getDate(dt).getFullYear();
};

export const getDateFormatAMPM = (dt) => {
  let hours = dt.getHours();
  const minutes = `0${dt.getMinutes()}`.slice(-2);
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours %= 12;
  hours = hours || 12;

  return `${hours}:${minutes} ${ampm}`;
};

export const getDayMonthNow = () => {
  const date = new Date();

  const day = `0${date.getUTCDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);

  return `${day}/${month}`;
};
