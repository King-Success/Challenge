import initialState from "../../reducers/initialState";
import { loginHelper, signupHelper, loadHelper } from "../../helpers/auth";

const { user } = initialState;
// Actions
export const FETCH_START_LOGIN = "beaking-news/login/START";
export const FETCH_FAILURE_LOGIN = "beaking-news/login/FAILURE";
export const FETCH_SUCCESS_LOGIN = "beaking-news/login/SUCCESS";
export const FETCH_START_SIGNUP = "beaking-news/signup/START";
export const FETCH_FAILURE_SIGNUP = "beaking-news/signup/FAILURE";
export const FETCH_SUCCESS_SIGNUP = "beaking-news/signup/SUCCESS";
export const FETCH_START_LOAD = "beaking-news/load/START";
export const FETCH_FAILURE_LOAD = "beaking-news/load/FAILURE";
export const FETCH_SUCCESS_LOAD = "beaking-news/load/SUCCESS";

// Reducers
export default (state = user, action) => {
  switch (action.type) {
    case FETCH_SUCCESS_LOGIN:
      return {
        ...state,
        name: action.username,
        email: action.email
      };
    case FETCH_SUCCESS_SIGNUP:
      return {
        ...state,
        username: action.username,
        email: action.email
      };
    case FETCH_SUCCESS_LOAD:
      return {
        ...state,
        username: action.username,
        email: action.email
      };
    default:
      return state;
  }
};

// Action creators
export const login = userData => {
  return async dispatch => {
    dispatch({ type: FETCH_START_LOGIN });
    try {
      const result = await loginHelper(userData);
      if (result.error)
        return dispatch({ type: FETCH_FAILURE_LOGIN, message: result.error });
      const { data } = result;
      dispatch({
        type: FETCH_SUCCESS_LOGIN,
        username: data.username,
        email: data.email
      });
    } catch (e) {
      dispatch({ type: FETCH_FAILURE_LOGIN, message: e });
    }
  };
};

export const signup = userData => {
  return async dispatch => {
    dispatch({ type: FETCH_START_SIGNUP });
    try {
      const result = await signupHelper(userData);
      if (result.error)
        return dispatch({ type: FETCH_FAILURE_LOGIN, message: result.error });
      const { data } = result;
      dispatch({
        type: FETCH_SUCCESS_SIGNUP,
        username: data.username,
        email: data.email
      });
    } catch (e) {
      dispatch({ type: FETCH_FAILURE_SIGNUP, message: e });
    }
  };
};

export const loadActiveUser = () => {
  return async dispatch => {
    dispatch({ type: FETCH_START_LOAD });
    try {
      const result = await loadHelper();
      if (result.error)
        return dispatch({ type: FETCH_FAILURE_LOAD, message: result.error });
      const { data } = result;
      dispatch({
        type: FETCH_SUCCESS_SIGNUP,
        username: data.username,
        email: data.email
      });
    } catch (e) {
      dispatch({ type: FETCH_FAILURE_LOAD, message: e });
    }
  };
};
