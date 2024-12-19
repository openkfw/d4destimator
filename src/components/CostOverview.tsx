import React from "react";

import CostSummary from "./CostSummary";
import CostDetails from "./CostDetails";
import { EstimatorConfig, ConfigProps } from "../types/estimatorConfigType";

interface CostTotals {
  totalChange: number;
  totalRun: number;
  totalTCO: number;
}

const calculateTotals = (config: EstimatorConfig): CostTotals => {
  const totals = { totalChange: 0, totalRun: 0, totalTCO: 0 };
  Object.values(config.costs).forEach((k) => {
    totals.totalChange += k.value;
  });
  totals.totalRun = totals.totalChange * config.constants.runcosts.value;
  totals.totalTCO =
    totals.totalChange + totals.totalRun * config.constants.tcoduration.value;
  return totals;
};

const CostOverview: React.FC<ConfigProps> = ({ config }) => {
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
