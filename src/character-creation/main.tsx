import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import { Layout } from "../SharedComponents";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
