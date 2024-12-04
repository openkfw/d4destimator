import React from "react";
import logo from "./logo.svg";
import "./App.css";

import CostOverview from "./components/CostOverview";
import Estimator from "./components/Estimator";
import GeneratedEstimator from "./components/GeneratedEstimator";

function App() {
  return (
    <div className="App">
      <GeneratedEstimator />
      <CostOverview />
    </div>
  );
}

export default App;
