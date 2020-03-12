import { all } from 'redux-saga/effects';

import {watchGetWeather} from './components/Dashboard/sagas';

export default function* rootSaga() {
    yield all([
        watchGetWeather()
    ]);
}