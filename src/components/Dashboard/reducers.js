import {GET_WEATHER, IS_WEATHER_LOADING} from './constants';
  
  const initialState = {
    weather: [],
    isLoading: false
  };
  
  function weather(state = initialState, action) {
    const {type, weather, isLoading} = action;
  
    switch (type) {
      case GET_WEATHER:
        return {
          ...state,
          weather: weather.list.map(a => {
            return {...a, city: weather.city}
          })
        }
      case IS_WEATHER_LOADING:
        return {
          ...state,
          isLoading
        }        
      default:
        return state;  
    }
  }
  
  export default weather;