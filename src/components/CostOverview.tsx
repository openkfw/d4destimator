import React from "react";

import CostSummary from "./CostSummary";
import CostDetails from "./CostDetails";
import { EstimatorConfig, ConfigProps } from "../types/estimatorConfigType";
import { CostTotals } from "../types/CostTotals";

const calculateTotals = (config: EstimatorConfig): CostTotals => {
  const totals = { totalInitial: 0, totalRun: 0, totalTCO: 0, tCODuration: 3 };
  Object.values(config.costs).forEach((k) => {
    totals.totalInitial += k.value;
  });
  totals.totalRun = totals.totalInitial * config.constants.runcosts.value;
  totals.totalTCO =
    totals.totalInitial + totals.totalRun * config.constants.tcoduration.value;
  totals.tCODuration = config.constants.tcoduration.value ;
  return totals;
};

const CostOverview: React.FC<ConfigProps> = ({ config }) => {
  const totals = calculateTotals(config);
  return (
    <div>
      <CostSummary
        totalInitial={totals.totalInitial}
        totalRun={totals.totalRun}
        totalTCO={totals.totalTCO}
        tCODuration={totals.tCODuration}
      />
      <CostDetails config={config} />
    </div>
  );
};

export default CostOverview;
