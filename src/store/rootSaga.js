import { all } from 'redux-saga/effects';

import weather from '../components/Dashboard/sagas';

export default function* rootSaga() {
  return yield all([weather]);
}
