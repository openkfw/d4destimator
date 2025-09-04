import React from 'react';
import CostDetails from './CostDetails';
import estimatorConfig from '../../src/assets/estimatorconfig.json';

describe('<CostDetails />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CostDetails config={estimatorConfig} />);
  });

  it('displays table with cost data', () => {
    cy.mount(<CostDetails config={estimatorConfig} />);

    // Should render table structure
    cy.get('table').should('exist');
    cy.get('thead').should('exist');
    cy.get('tbody').should('exist');
    cy.get('tbody tr').should('have.length.greaterThan', 0);
  });
});
