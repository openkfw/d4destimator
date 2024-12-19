import React from 'react'
import CostDetails from './CostDetails'

describe('<CostDetails />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CostDetails />)
  })
})