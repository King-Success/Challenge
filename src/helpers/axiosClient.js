import axios from "axios";

const {
  REACT_APP_API_KEY: ApiKey,
  REACT_APP_API_BASE: baseURL,
  NODE_ENV: environ
} = process.env;
const headers = { Authorization: `Bearer ${ApiKey}` };

const axiosClient =
  environ === "test" ? axios : axios.create({ baseURL, headers });

export default axiosClient;
