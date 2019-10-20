import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./containers/App";
import reducer from "./reducers";
import "./styles.css";

const loggerMiddleware = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
