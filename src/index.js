import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./scripts/register-service-worker";

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
