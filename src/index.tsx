import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

import { store } from "./redux"
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLInputElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
