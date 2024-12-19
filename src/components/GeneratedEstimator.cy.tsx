import React from 'react'
import GeneratedEstimator from './GeneratedEstimator'

import estimatorConfig from "../../src/assets/estimatorconfig.json";
describe('<GeneratedEstimator />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GeneratedEstimator estimatorConfig = {estimatorConfig}/>)
  })
})