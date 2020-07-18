import { GET_WEATHER, IS_WEATHER_LOADING } from './constants';

const initialState = {
  weather: [],
  isLoading: false,
};

function weather(state = initialState, action) {
  const { type, data, isLoading } = action;

  switch (type) {
    case GET_WEATHER:
      let weather = data;

      if (data.list) {
        weather = data.list.map((a) => {
          return { ...a, city: data.city };
        });
      }

      return {
        ...state,
        weather,
      };
    case IS_WEATHER_LOADING:
      return {
        ...state,
        isLoading,
      };
    default:
      return state;
  }
}

export default weather;
