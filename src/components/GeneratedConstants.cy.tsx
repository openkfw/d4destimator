import React from 'react';
import GeneratedConstants from '../../../src/components/GeneratedConstants';
import estimatorConfig from '../../../src/assets/estimatorconfig.json';

describe('<GeneratedConstants />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GeneratedConstants estimatorConfig={estimatorConfig} />);
  });
});
