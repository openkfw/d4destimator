import React, { useEffect, useState } from "react";

import "./App.css";

import CostOverview from "./components/CostOverview";

import GeneratedEstimator from "./components/GeneratedEstimator";
import runEngine from "./utils/runEngine";

import estimatorConfig from "./assets/estimatorconfig.json";
import CostDetails from "./components/CostDetails";

function App() {
  const [calculation, setCalculation] = useState(estimatorConfig);
  useEffect(() => {
    const result = runEngine(estimatorConfig) as any;
    setCalculation(result);

    console.log("Running engine:", result);
  }, []);
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <GeneratedEstimator estimatorConfig={calculation} />
        </div>
        <div>
          <CostDetails config={calculation} handleChange={null} />
        </div>
      </div>
    </div>
  );
}

export default App;
