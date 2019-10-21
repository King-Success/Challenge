import { combineReducers } from "redux";
import axios from "../../helpers/axiosClient";
import initialState from "../../reducers/initialState";
import getters from "../../helpers/getters";

const { bookmarks, loading, error } = initialState;
const { getUrl, getPage } = getters;
// Actions
const FETCH_START = "beaking-news/bookmarks/FETCH/START";
const FETCH_FAILURE = "beaking-news/bookmarks/FETCH/FAILURE";
const FETCH_SUCCESS = "beaking-news/bookmarks/FETCH/SUCCESS";

// Sub Reducers
const bookmarkReducer = (state = bookmarks, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        total: action.total,
        articles: action.articles,
        offset: action.offset,
        searchString: action.searchString
      };
    default:
      return state;
  }
};

const errorReducer = (state = error, action) => {
  switch (action.type) {
    case FETCH_FAILURE:
      return action.message;
    default:
      return state;
  }
};

const loadingReducer = (state = loading, action) => {
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

// Main Reducer
export default combineReducers({
  bookmarks: bookmarkReducer,
  loading: loadingReducer,
  error: errorReducer
});

// Action creators
export const fetchBookmarks = (
  data = {
    offset: 1,
    pageSize: 10,
    searchString: ""
  }
) => {
  const { offset, pageSize } = data;
  const page = getPage(offset, pageSize);
  const url = getUrl({ ...data, page });
  return async dispatch => {
    dispatch({ type: FETCH_START });
    try {
      const result = await axios.get(url);
      dispatch({
        type: FETCH_SUCCESS,
        articles: result.data.articles,
        total: result.data.totalResults,
        offset: data.offset,
        searchString: data.searchString
      });
    } catch (e) {
      dispatch({ type: FETCH_FAILURE, message: e });
    }
  };
};
