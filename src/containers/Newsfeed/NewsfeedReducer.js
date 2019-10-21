import axios from "../../helpers/axiosClient";
import initialState from "../../reducers/initialState";
import getters from "../../helpers/getters";

const { news } = initialState;
const { getUrl, getPage } = getters;
// Actions
export const FETCH_START_NEWS = "beaking-news/news/FETCH/START";
export const FETCH_FAILURE_NEWS = "beaking-news/news/FETCH/FAILURE";
export const FETCH_SUCCESS_NEWS = "beaking-news/news/FETCH/SUCCESS";

// Sub Reducers
export default (state = news, action) => {
  switch (action.type) {
    case FETCH_SUCCESS_NEWS:
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
  const page = getPage(offset, pageSize);
  const url = getUrl({ ...data, page });
  return async dispatch => {
    dispatch({ type: FETCH_START_NEWS });
    try {
      const result = await axios.get(url);
      dispatch({
        type: FETCH_SUCCESS_NEWS,
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
      dispatch({ type: FETCH_FAILURE_NEWS, message: e });
    }
  };
};
