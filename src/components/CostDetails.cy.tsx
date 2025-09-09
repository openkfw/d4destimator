import React from 'react';
import CostDetails from './CostDetails';
import estimatorConfig from '../assets/estimatorconfig.json';
import { mount } from 'cypress/react'
describe('<CostDetails />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<CostDetails config={estimatorConfig} />);
  });

  it('displays table with cost data', () => {
    mount(<CostDetails config={estimatorConfig} />);

    // Should render table structure
    cy.get('table').should('exist');
    cy.get('thead').should('exist');
    cy.get('tbody').should('exist');
    cy.get('tbody tr').should('have.length.greaterThan', 0);
  });
});
