import React from 'react';
import GeneratedEstimator from './GeneratedEstimator';

import estimatorConfig from '../assets/estimatorconfig.json';
import { mount } from 'cypress/react';
describe('<GeneratedEstimator />', () => {
  const mockSetCalculation = () => {};

  it('renders', () => {
    mount(
      <GeneratedEstimator estimatorConfig={estimatorConfig} setCalculation={mockSetCalculation} />
    );
  });
});
