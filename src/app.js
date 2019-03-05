import React from "react";
import ReactDOM from "react-dom";
import Weather from "./components/weather/index";

const App = () => {
  return <Weather />;
};

ReactDOM.render(<App />, document.getElementById("app"));