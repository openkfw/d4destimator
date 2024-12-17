import estimatorConfig from "../../src/assets/estimatorconfig.json";

describe("Test the estimator config", () => {
  it("should contain the flavour property", () => {
    expect(estimatorConfig).to.have.property("flavour");
  });
});
