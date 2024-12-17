import estimatorConfig from "../../src/assets/estimatorconfig.json";
import estimatorSchema from "../../src/assets/estimator-schema.json";

import Ajv from "ajv";

import { EstimatorConfig } from "../../src/types/estimatorConfigType";

const estimatorConfigTyped: EstimatorConfig = estimatorConfig;

const ajv = new Ajv();
describe("Test the estimator config", () => {
  it("should contain the flavour property", () => {
    expect(estimatorConfigTyped).to.have.property("flavour");
  });
  it("should be a valid estimator config according to the schema", () => {
    const validate = ajv.compile(estimatorSchema);
    const valid = validate(estimatorConfigTyped);
    expect(valid).to.be.true;
    if (!valid) {
      console.log(validate.errors);
    }
  });
  it("Dummy test", () => {
    expect(true).to.equal(true);
  });
});
