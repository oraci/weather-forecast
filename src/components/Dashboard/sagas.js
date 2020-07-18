import { call, put, takeEvery } from 'redux-saga/effects';
import { getWeatherApi } from './api';
import {
  GET_WEATHER,
  WATCH_GET_WEATHER,
  IS_WEATHER_LOADING,
  WATCH_IS_WEATHER_LOADING,
} from './constants';

export function* watchGetWeather() {
  yield takeEvery(WATCH_GET_WEATHER, getWeather);
}

function* getWeather({ city }) {
  try {
    const result = yield call(getWeatherApi, city);

    if (result) {
      yield put({ type: GET_WEATHER, data: result });
    }

    yield put({ type: IS_WEATHER_LOADING, isLoading: false });
  } catch (e) {
    console.log(e);
    yield put({ type: IS_WEATHER_LOADING, isLoading: false });
  }
}

export function* watchToggleWeatherLoading() {
  yield takeEvery(WATCH_IS_WEATHER_LOADING, toggleWeatherLoading);
}

function* toggleWeatherLoading({ isLoading }) {
  yield put({ type: IS_WEATHER_LOADING, isLoading });
}
