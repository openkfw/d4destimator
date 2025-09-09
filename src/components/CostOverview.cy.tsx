import React from 'react';
import CostOverview from './CostOverview';
import estimatorConfig from '../assets/estimatorconfig.json';
import { mount } from 'cypress/react';
describe('<CostOverview />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<CostOverview config={estimatorConfig} />);
  });
});
