import estimatorConfig from "../../src/assets/estimatorconfig.json";
import runEngine from "../../src/utils/runEngine";

describe("Test the estimator config", () => {
  it("We should be able to run the engine", () => {
    const result = runEngine(estimatorConfig)

    expect(result).to.have.property("flavour");
    const adminOverhead = result.costs.adminOverhead.value;
    console.log("Admin overhead", adminOverhead);
    expect(adminOverhead).to.equal(15000);
    
  });
  it("Dummy test", () => {
    expect(true).to.equal(true);
  });
});
