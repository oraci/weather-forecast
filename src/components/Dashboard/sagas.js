import { call, put, all, takeLatest } from 'redux-saga/effects';
import { getWeatherApi } from './api';

import { Types, Creators as CreatorsWeather } from './reducers';

export function* getWeather({ payload }) {
  try {
    const { city } = payload;
    const result = yield call(getWeatherApi, city);

    let data = [];
    if (result) {
      if (result.list) {
        data = result.list.map((a) => {
          return { ...a, city: result.city };
        });
      }
    }

    yield put(CreatorsWeather.setWeather(data));
  } catch (err) {
    yield put(CreatorsWeather.toggleWeatherLoading(false));
    console.warn(err);
  }
}

export default all([takeLatest(Types.GET_WEATHER, getWeather)]);
