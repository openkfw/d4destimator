import React from "react";
import CostSummary from "./CostSummary";

describe("<CostSummary />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CostSummary totalInitial={20} totalRun={30} totalTCO={40} tCODuration={7} />);
  });
});
