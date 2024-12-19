import React from "react";
import CostOverview from "./CostOverview";
import estimatorConfig from "../../src/assets/estimatorconfig.json";

describe("<CostOverview />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CostOverview config={estimatorConfig} />);
  });
});
