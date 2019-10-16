import { combineReducers } from "redux";
import axios from "../../helpers/axiosClient";
import initialState from "../../reducers/initialState";
import getters from "../../helpers/getters";

const { news, loading, error } = initialState;
const { getUrl } = getters;
// Actions
const FETCH_START = "beaking-news/news/FETCH/START";
const FETCH_FAILURE = "beaking-news/news/FETCH/FAILURE";
const FETCH_SUCCESS = "beaking-news/news/FETCH/SUCCESS";

// Sub Reducers
const newsReducer = (state = news, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        total: action.total,
        articles: action.articles,
        offset: action.offset,
        language: action.language,
        category: action.category,
        source: action.source,
        country: action.country,
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
  news: newsReducer,
  loading: loadingReducer,
  error: errorReducer
});

// Action creators
export const fetchNews = (
  data = {
    offset: 1,
    pageSize: 10,
    country: "us",
    category: "general",
    language: "en",
    source: "",
    searchString: ""
  }
) => {
  const { offset, pageSize } = data;
  const page = offset >= pageSize ? Math.ceil(offset / pageSize) + 1 : 1;
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
        language: data.language,
        category: data.category,
        source: data.source,
        country: data.country,
        searchString: data.searchString
      });
    } catch (e) {
      dispatch({ type: FETCH_FAILURE, message: e });
    }
  };
};
