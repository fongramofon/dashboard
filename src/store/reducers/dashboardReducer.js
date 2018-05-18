import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'; 

const initialState = {
  dashboardData: {},
  loading: false,
  error: null
}

const getDashboardDataStart = (state, action) => updateObject(state, {
  loading: true
})

const getDashboardDataSuccess = (state, action) => updateObject(state, {
  dashboardData: action.data,
  loading: false
});

const getDashboardDataFail = (state, action) => updateObject(state, {
  error: action.error,
  loading: false
});

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_DASHBOARD_DATA_START : return getDashboardDataStart(state, action);
    case actionTypes.GET_DASHBOARD_DATA_SUCCESS : return getDashboardDataSuccess(state, action);
    case actionTypes.GET_DASHBOARD_DATA_FAIL : return getDashboardDataFail(state, action);
    default : return state;
  }
}

export default reducer;