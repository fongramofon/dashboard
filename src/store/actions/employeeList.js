import * as actionTypes from '../actions/actionTypes';

export const fetchEmployees = page => ({
  type: actionTypes.FETCH_EMPLOYEES,
  page
})

export const fetchEmployeesStart = () => ({
  type: actionTypes.FETCH_EMPLOYEES_START
})

export const fetchEmployeesFail = error => ({
  type: actionTypes.FETCH_EMPLOYEES_FAIL,
  error
})

export const fetchEmployeesSuccess = employees => {
  // Data normalizing
  const employeesById = {};
  const employeesAllIds = [];
  employees.forEach(emp => {
    employeesAllIds.push(emp.id);
    employeesById[emp.id] = emp;
  });
  return {
    type: actionTypes.FETCH_EMPLOYEES_SUCCESS,
    employees: { byId: employeesById, allIds: employeesAllIds }
  }
}

export const sortBy = order => ({
  type: actionTypes.SORT_BY,
  order
})

export const clearEmployees = () => ({
  type: actionTypes.CLEAR_EMPLOYEES
});

export const thereIsNoMore = status => ({
  type: actionTypes.SET_THERE_IS_NO_MORE,
  status
})