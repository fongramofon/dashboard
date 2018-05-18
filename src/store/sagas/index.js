import * as actionTypes from '../actions/actionTypes';
import { takeEvery } from 'redux-saga/effects';
import { fetchEmployeesSaga } from './employeeList';

export function* watchFetchEmployees() {
  yield takeEvery(actionTypes.FETCH_EMPLOYEES, fetchEmployeesSaga);
}

export function* watchGetDashboardData() {
  yield takeEvery(actionTypes.GET_DASHBOARD_DATA, )
}