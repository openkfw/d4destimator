import React from 'react';
import CostSummary from './CostSummary';
import { mount } from 'cypress/react';
describe('<CostSummary />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<CostSummary totalInitial={20} totalRun={30} totalTCO={40} tCODuration={7} />);
  });
});
