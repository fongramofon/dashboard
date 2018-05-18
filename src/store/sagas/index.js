import * as actionTypes from '../actions/actionTypes';
import { takeEvery } from 'redux-saga/effects';
import { getDashboardDataSaga } from './dashboard';

export function* watchGetDashboardData() {
    yield takeEvery(actionTypes.GET_DASHBOARD_DATA, getDashboardDataSaga);
}