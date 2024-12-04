import React from "react";
import logo from "./logo.svg";
import "./App.css";

import CostOverview from "./components/CostOverview";
import Estimator from "./components/Estimator";
import GeneratedEstimator from "./components/GeneratedEstimator";

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <GeneratedEstimator />
        </div>
        <div>
          <CostOverview />
        </div>
      </div>
    </div>
  );
}

export default App;
