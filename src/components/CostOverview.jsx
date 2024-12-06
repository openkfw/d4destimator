import React, { useState } from "react";

import CostSummary from "./CostSummary";
import CostDetails from "./CostDetails";

const CostOverview = ({ estimatorConfig }) => {
  const [costs, setCosts] = useState({
    hardwareInitial: "",
    hardwareRun: "-",
    procurementInitial: "",
    procurementRun: "-",
    infrastructureInitial: "",
    infrastructureRun: "-",
    integrationInitial: "",
    integrationRun: "-",
    securityInitial: "",
    securityRun: "-",
    monitoringInitial: "",
    monitoringRun: "-",
    documentationInitial: "",
    documentationRun: "-",
    changeManagementInitial: "",
    changeManagementRun: "-",
    adminTrainingInitial: "",
    adminTrainingRun: "-",
    userTrainingInitial: "",
    userTrainingRun: "-",
    adminOverheadInitial: "",
    adminOverheadRun: "-",
    analysisDesignInitial: "",
  });

  const handleChange = (field, value) => {
    setCosts((prevCosts) => ({
      ...prevCosts,
      [field]: value,
      [`${field.replace("Initial", "Run")}`]: value
        ? (parseFloat(value) * 0.2).toFixed(2)
        : "-",
    }));
  };

  const totalInitial = Object.keys(costs)
    .filter((key) => key.endsWith("Initial"))
    .reduce((acc, key) => acc + (parseFloat(costs[key]) || 0), 0);
  const totalRun = Object.keys(costs)
    .filter((key) => key.endsWith("Run") && costs[key] !== "-")
    .reduce((acc, key) => acc + (parseFloat(costs[key]) || 0), 0)
    .toFixed(2);
  const totalCostOfOwnership = (totalInitial + totalRun * 3).toFixed(2);

  return (
    <div>
      <CostSummary
        totalInitial={totalInitial}
        totalRun={totalRun}
        totalCostOfOwnership={totalCostOfOwnership}
      />
      <CostDetails costs={costs} handleChange={handleChange} />
    </div>
  );
};

export default CostOverview;
