import {GET_WEATHER} from './constants';
  
  const initialState = {
    weather: []
  };
  
  function weather(state = initialState, action) {
    const {type, weather} = action;
  
    switch (type) {
      case GET_WEATHER:
        return {
          ...state,
          weather: weather
        }
      default:
        return state;  
    }
  }
  
  export default weather;