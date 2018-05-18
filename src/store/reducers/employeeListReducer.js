import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  pageToLoadUp: 1,
  employees: { byId: {}, allIds: [] },
  thereIsNoMore: false,
  loading: false,
  sortingOrder: 'None',
  error: null
}

const fetchEmployeesStart = (state, action) => updateObject(state, 
  { loading: true }
);

const fetchEmployeesFail = (state, action) => updateObject(state,
  { loading: false, error: action.error }
);

const fetchEmployeesSuccess = (state, action) => {
  const byId = { ...state.employees.byId, ...action.employees.byId };
  const allIds = [ ...state.employees.allIds, ...action.employees.allIds  ];
  const employees = { byId: byId, allIds: allIds };
  return updateObject(state, 
    { loading: false, employees: employees, pageToLoadUp: state.pageToLoadUp + 1 }
  );
}

const sortBy = (state, action) => updateObject(state,
  { sortingOrder: action.order }
);

const clearEmployees = (state, action) => updateObject(state,
  { employees: { byId: {}, allIds: [] } }
);

const setThereIsNoMore = (state, action) => updateObject(state,
  { thereIsNoMore: true }
);


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_EMPLOYEES_START : return fetchEmployeesStart(state, action);
    case actionTypes.FETCH_EMPLOYEES_FAIL : return fetchEmployeesFail(state, action);
    case actionTypes.FETCH_EMPLOYEES_SUCCESS : return fetchEmployeesSuccess(state, action); 
    case actionTypes.SORT_BY : return sortBy(state, action);
    case actionTypes.CLEAR_EMPLOYEES : return clearEmployees(state, action);
    case actionTypes.SET_THERE_IS_NO_MORE : return setThereIsNoMore(state, action);
    default : return state;
  }
}

export default reducer;