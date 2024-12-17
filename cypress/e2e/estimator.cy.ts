import estimatorConfig from "../../src/assets/estimatorconfig.json";
import estimatorSchema from "../../src/assets/estimator-schema.json";
import Ajv from "ajv";

export interface EstimatorConfig {
  flavour: string;
  author: string;
  version: string;
  parameters: {
    [key: string]: {
      label: string;
      values: Array<{
        inputFactor: string;
        selected: boolean;
        initialAnalysisDesign: string;
        procurement?: string;
        hardware?: string;
        infrastructureConfiguration?: string;
        integrationSystems?: string;
        securitySetup?: string;
        monitoringSetup?: string;
        documentationAdaptation?: string;
        changeManagement?: string;
        adminTraining?: string;
        userTraining?: string;
        adminOverhead?: string;
      }>;
    };
  };
  costs: {
    [key: string]: {
      label: string;
      value: string;
      category: string;
    };
  };
  constants: {
    dailyrate: {
      label: string;
      currency: string;
      value: string;
    };
    runcosts: {
      unit: string;
      value: string;
    };
    tcoduration: {
      unit: string;
      value: string;
    };
  };
}

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
