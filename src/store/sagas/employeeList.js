import axios from 'axios';
import { put } from 'redux-saga/effects';

import { fetchEmployeesStart, fetchEmployeesFail, fetchEmployeesSuccess, thereIsNoMore } from '../actions/employeeList';

export function* fetchEmployeesSaga (action) {
  yield put(fetchEmployeesStart());
  try {
    const response = yield axios.get(`http://localhost:3000/employees?_page=${action.page}&_limit=25`);
    if (response.data.length === 0) yield put(thereIsNoMore(true));
    else yield put(fetchEmployeesSuccess(response.data));
  }
  catch (error) {
    yield put(fetchEmployeesFail(error));
  }
}