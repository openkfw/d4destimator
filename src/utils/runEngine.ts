import { EstimatorConfig } from "../../src/types/estimatorConfigType";

export default function runEngine(config: EstimatorConfig) {
  const calculatedConfig = { ...config };

  //the list of relevant efforts is in the results field, take this
  const costKeys = Object.keys(calculatedConfig.costs);
  const parameterKeys = Object.keys(calculatedConfig.parameters);
  console.log("Keys for the calculation:", costKeys);
  console.log("Using this config for the calculation", config);

  //lets iterate through all cost fields and add up effort where needed
  costKeys.forEach((costkey) => {
    //for that costkey, check all parameter fields if there are effort. But only for the selected ones.
    calculatedConfig.costs[costkey].value = 0; //reset (just in case there was a default value)
    parameterKeys.forEach((param) => {
      const selectedParameter = config.parameters[param].values.filter(
        (x) => x.selected,
      )[0]; //I hope that only one parameter is set to true!

      //for the calculation runner, we don't need the flag if it's selected and what the inputFactor was
      const filteredValues = Object.fromEntries(
        Object.entries(selectedParameter).filter(
          ([key]) => key !== "inputFactor" && key !== "selected",
        ),
      );
      calculatedConfig.costs[costkey].value +=
        parseInt(filteredValues[costkey] as string) *
        calculatedConfig.constants.dailyrate.value;
    });
  });

  return calculatedConfig;
}
