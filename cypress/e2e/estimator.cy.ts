import estimatorConfig from '../../src/assets/estimatorconfig.json';

import { EstimatorConfig } from '../../src/types/estimatorConfigType';

const estimatorConfigTyped: EstimatorConfig = estimatorConfig;

describe('Test the estimator config', () => {
  it('should contain the flavour property', () => {
    expect(estimatorConfigTyped).to.have.property('flavour');
  });
  it('Dummy test', () => {
    expect(true).to.equal(true);
  });
});
