import axios from 'axios';
import { put } from 'redux-saga/effects';

import { getDashboardDataStart, getDashboardDataSuccess, getDashboardDataFail} from '../actions/dashboard';

export function* getDashboardDataSaga (action) {
  yield put(getDashboardDataStart());
  try {
    const response = yield axios.get('https://devmeetup-ea15b.firebaseio.com/data.json');
    yield put(getDashboardDataSuccess(response.data));
  }
  catch (error) {
    yield put(getDashboardDataFail(error));
  }
}