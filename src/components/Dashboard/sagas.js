import {call, put, takeEvery} from 'redux-saga/effects';
import {getWeatherApi} from './api';
import {
    GET_WEATHER,
    WATCH_GET_WEATHER,
} from './constants';

export function* watchGetWeather() {
  yield takeEvery(WATCH_GET_WEATHER, getWeather);
}

function* getWeather({city}) {
  try {
    const result = yield call(getWeatherApi, city);
    const {list} = result;

    if (list) {
      yield put({ type: GET_WEATHER, weather: list});
    }
  } catch(e) {
    console.log(e);
  }
}