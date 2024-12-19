import React from 'react'
import GeneratedConstants from './GeneratedConstants'
import estimatorConfig from "../../src/assets/estimatorconfig.json";

describe('<GeneratedConstants />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GeneratedConstants 
                        estimatorConfig={estimatorConfig}/>)
  })
})