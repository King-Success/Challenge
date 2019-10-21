import { combineReducers } from "redux";
import newsfeedReducer, {
  FETCH_START_NEWS,
  FETCH_FAILURE_NEWS,
  FETCH_SUCCESS_NEWS
} from "../containers/Newsfeed/NewsfeedReducer";
import bookmarkReducer, {
  FETCH_SUCCESS_BOOKMARKS,
  FETCH_START_BOOKMARKS,
  FETCH_FAILURE_BOOKMARKS
} from "../containers/Bookmark/BookmarkReducer";
import authReducer, {
  FETCH_FAILURE_LOGIN,
  FETCH_START_LOGIN,
  FETCH_SUCCESS_LOGIN,
  FETCH_FAILURE_SIGNUP,
  FETCH_START_SIGNUP,
  FETCH_SUCCESS_SIGNUP,
  FETCH_FAILURE_LOAD,
  FETCH_START_LOAD,
  FETCH_SUCCESS_LOAD,
  FETCH_FAILURE_LOGOUT,
  FETCH_START_LOGOUT,
  FETCH_SUCCESS_LOGOUT
} from "../containers/Auth/AuthReducer";
import initialState from "./initialState";

const { loading, error } = initialState;

export const errorReducer = (state = error, action) => {
  switch (action.type) {
    case FETCH_FAILURE_NEWS:
      return action.message;
    case FETCH_FAILURE_BOOKMARKS:
      return action.message;
    case FETCH_FAILURE_LOGIN:
      return action.message;
    case FETCH_FAILURE_SIGNUP:
      return action.message;
    case FETCH_FAILURE_LOGOUT:
      return action.message;
    default:
      return state;
  }
};

export const loadingReducer = (state = loading, action) => {
  switch (action.type) {
    case FETCH_START_NEWS:
      return true;
    case FETCH_FAILURE_NEWS:
      return false;
    case FETCH_SUCCESS_NEWS:
      return false;
    case FETCH_START_BOOKMARKS:
      return true;
    case FETCH_FAILURE_BOOKMARKS:
      return false;
    case FETCH_SUCCESS_BOOKMARKS:
      return false;
    case FETCH_START_LOGIN:
      return true;
    case FETCH_FAILURE_LOGIN:
      return false;
    case FETCH_SUCCESS_LOGIN:
      return false;
    case FETCH_START_SIGNUP:
      return true;
    case FETCH_FAILURE_SIGNUP:
      return false;
    case FETCH_SUCCESS_SIGNUP:
      return false;
    case FETCH_START_LOAD:
      return true;
    case FETCH_FAILURE_LOAD:
      return false;
    case FETCH_SUCCESS_LOAD:
      return false;
    case FETCH_START_LOGOUT:
      return true;
    case FETCH_FAILURE_LOGOUT:
      return false;
    case FETCH_SUCCESS_LOGOUT:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  news: newsfeedReducer,
  bookmarks: bookmarkReducer,
  user: authReducer,
  loading: loadingReducer,
  error: errorReducer
});
