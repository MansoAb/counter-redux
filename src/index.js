import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const initialState = {
  count: 0,
};

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case "plus":
      return {
        ...state,
        count: state.count + 1,
      };
    case "minus":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reduce);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
