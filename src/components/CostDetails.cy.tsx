import React from "react";
import CostDetails from "./CostDetails";
import estimatorConfig from "../../src/assets/estimatorconfig.json";

describe("<CostDetails />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CostDetails config={estimatorConfig} />);
  });
});
