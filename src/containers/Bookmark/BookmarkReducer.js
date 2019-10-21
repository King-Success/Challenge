import axios from "../../helpers/axiosClient";
import initialState from "../../reducers/initialState";
import getters from "../../helpers/getters";

const { bookmarks } = initialState;
const { getUrl, getPage } = getters;
// Actions
export const FETCH_START_BOOKMARKS = "beaking-news/bookmarks/FETCH/START";
export const FETCH_FAILURE_BOOKMARKS = "beaking-news/bookmarks/FETCH/FAILURE";
export const FETCH_SUCCESS_BOOKMARKS = "beaking-news/bookmarks/FETCH/SUCCESS";

// Reducers
export default (state = bookmarks, action) => {
  switch (action.type) {
    case FETCH_SUCCESS_BOOKMARKS:
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
    dispatch({ type: FETCH_START_BOOKMARKS });
    try {
      const result = await axios.get(url);
      dispatch({
        type: FETCH_SUCCESS_BOOKMARKS,
        articles: result.data.articles,
        total: result.data.totalResults,
        offset: data.offset,
        searchString: data.searchString
      });
    } catch (e) {
      dispatch({ type: FETCH_FAILURE_BOOKMARKS, message: e });
    }
  };
};
