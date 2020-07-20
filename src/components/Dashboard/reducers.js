export const Types = {
  GET_WEATHER: '@weather/GET_WEATHER',
  SET_WEATHER: '@weather/SET_WEATHER',
  IS_WEATHER_LOADING: '@weather/IS_WEATHER_LOADING',
};

const initialState = {
  weather: [],
  isLoading: false,
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case Types.GET_WEATHER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case Types.SET_WEATHER: {
      return {
        ...state,
        isLoading: initialState.isLoading,
        weather: action.payload.data,
      };
    }
    case Types.IS_WEATHER_LOADING: {
      return {
        ...state,
        isLoading: action.payload.status,
      };
    }
    default:
      return state;
  }
}

export const Creators = {
  getWeather: (city) => ({
    type: Types.GET_WEATHER,
    payload: { city },
  }),

  setWeather: (data) => ({
    type: Types.SET_WEATHER,
    payload: { data },
  }),

  toggleWeatherLoading: (status) => ({
    type: Types.IS_WEATHER_LOADING,
    payload: { status },
  }),
};
