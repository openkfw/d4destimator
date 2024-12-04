import React, { useEffect, useState } from "react";

import "./App.css";

import CostOverview from "./components/CostOverview";
import Estimator from "./components/Estimator";
import GeneratedEstimator from "./components/GeneratedEstimator";
import runEngine from "./utils/runEngine";

import estimatorConfig from "./assets/estimatorconfig.json";

function App() {
  const [calculation, setCalculation] = useState();
  useEffect(() => {
    const result = runEngine(estimatorConfig);
    setCalculation(result);
    console.log("Running engine:", result);
  }, []);
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <GeneratedEstimator estimatorConfig={estimatorConfig} />
        </div>
        <div>
          <CostOverview estimatorConfig={calculation} />
        </div>
      </div>
    </div>
  );
}

export default App;
