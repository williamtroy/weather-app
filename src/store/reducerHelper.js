
export const getLocalIconFromWSIcon = icon => {
  switch (icon) {
    case '01d':
    case '01n':
      return 'sunny';
    case '02d':
    case '02n':
      return 'cloudyWithSun';
    case '03d':
    case '03n':
      return 'cloudy';
    case '04d':
    case '04n':
      return 'veryCloudy';
    case '09d':
    case '09n':
      return 'rain';
    case '10d':
    case '10n':
      return 'showersWithSun';
    case '11d':
    case '11n':
      return 'thunderstorms';
    case '13d':
    case '13n':
      return 'snow';
    case '50d':
    case '50n':
      return 'windy'; //Totally not windy, but the icon is the closest for mist
    default:
      return 'sunny';
  }
};

export const getDayFromDt = dt => {
  const day = new Date(dt * 1000).getDay();
  return [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][day];
};