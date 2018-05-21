import * as actionTypes from './actionTypes';

export const getDashboardData = () => ({
  type: actionTypes.GET_DASHBOARD_DATA
});

export const getDashboardDataStart = () => ({
  type: actionTypes.GET_DASHBOARD_DATA_START
});

export const getDashboardDataSuccess = data => {
  data = Object.values(data);
  return {
    type: actionTypes.GET_DASHBOARD_DATA_SUCCESS,
    data
  }
};

export const getDashboardDataFail = error => ({
  type: actionTypes.GET_DASHBOARD_DATA_FAIL,
  error
});

