import React from 'react';
import GeneratedConstants from './GeneratedConstants';
import estimatorConfig from '../assets/estimatorconfig.json';
import { mount } from 'cypress/react';
describe('<GeneratedConstants />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<GeneratedConstants estimatorConfig={estimatorConfig} />);
  });
});
