import React from 'react';
import GeneratedEstimator from './GeneratedEstimator';

import estimatorConfig from '../../../src/assets/estimatorconfig.json';

describe('<GeneratedEstimator />', () => {
  const mockSetCalculation = () => {};

  it('renders', () => {
    cy.mount(
      <GeneratedEstimator estimatorConfig={estimatorConfig} setCalculation={mockSetCalculation} />
    );
  });
});
