import axios from 'axios';
import { put } from 'redux-saga/effects';

import { getDashboardDataStart, getDashboardDataSuccess, getDashboardDataFail} from '../actions/dashboard';

export function* getDashboardDataSaga (action) {
  yield put(getDashboardDataStart());
}