import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./dragdrop";
import { Provider } from "react-redux";
import { store as getStore } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={getStore()}>
      <Card />
    </Provider>
  </React.StrictMode>
);
