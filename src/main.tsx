import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import Home from "./page/Home";
import Hooks from "./contexts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Hooks>
      <Home />
    </Hooks>
  </React.StrictMode>
);
