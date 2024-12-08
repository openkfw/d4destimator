import React, { useState } from "react";

import CostSummary from "./CostSummary";
import CostDetails from "./CostDetails";

const calculateTotals = (config) => {
  const totals = { totalChange: 0, totalRun: 0, totalTCO: 0 };
  return totals;
};

const CostOverview = ({ config }) => {
  const totals = calculateTotals(config);
  return (
    <div>
      <CostSummary
        totalInitial={totals.totalChange}
        totalRun={totals.totalRun}
        totalCostOfOwnership={totals.totalTCO}
      />
      <CostDetails config={config} />
    </div>
  );
};

export default CostOverview;
