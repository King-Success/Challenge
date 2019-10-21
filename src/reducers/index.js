import { combineReducers } from "redux";
import newsfeedReducer, {
  FETCH_START,
  FETCH_FAILURE,
  FETCH_SUCCESS
} from "../containers/Newsfeed/NewsfeedReducer";
import bookmarkReducer from "../containers/Bookmark/BookmarkReducer";
import initialState from "./initialState";

const { loading, error } = initialState;

export const errorReducer = (state = error, action) => {
  switch (action.type) {
    case FETCH_FAILURE:
      return action.message;
    default:
      return state;
  }
};

export const loadingReducer = (state = loading, action) => {
  switch (action.type) {
    case FETCH_START:
      return true;
    case FETCH_FAILURE:
      return false;
    case FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  news: newsfeedReducer,
  bookmarks: bookmarkReducer,
  loading: loadingReducer,
  error: errorReducer
});
