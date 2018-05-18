import { createSelector } from 'reselect';

const getEmployees = state => state.employees;

const getSortingOrder = state => state.sortingOrder;

export const getSortedEmployees = createSelector(
  [getEmployees, getSortingOrder],
  (employees, sortingOrder) => {
    if (sortingOrder === null || sortingOrder === 'None') {
      return employees;
    }

    let sortedByLastname = null;

    // Arguably repeated code: is it better to make check once and repeat the code or make check every sort callback?

    if (sortingOrder === 'Last Name (asc)') {
      const employeeArr = Object.values(employees.byId);
      sortedByLastname = employeeArr.sort((a, b) => {
        const aLastnameFirstLetter = a.last_name.split(' ')[0];
        const bLastnameFirstLetter = b.last_name.split(' ')[0];
        if (aLastnameFirstLetter < bLastnameFirstLetter) return -1;
        if (aLastnameFirstLetter > bLastnameFirstLetter) return 1;
        return 0;
      });
    }

    if (sortingOrder === 'Last Name (desc)') {
      const employeeArr = Object.values(employees.byId);
      sortedByLastname = employeeArr.sort((a, b) => {
        const aLastnameFirstLetter = a.last_name.split(' ')[0];
        const bLastnameFirstLetter = b.last_name.split(' ')[0];
        if (aLastnameFirstLetter > bLastnameFirstLetter) return -1;
        if (aLastnameFirstLetter < bLastnameFirstLetter) return 1;
        return 0;
      });
    }

    const sortedAllIds = [];
    sortedByLastname.forEach(emp => {
      sortedAllIds.push(emp.id);
    });
    const sortedEmployees = { byId: employees.byId, allIds: sortedAllIds };
    return sortedEmployees;
  }
)