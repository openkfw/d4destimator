export default function runEngine(config: any) {
  const calculatedConfig = { ...config } as any;

  //the list of relevant efforts is in the results field, take this
  const costKeys = Object.keys(calculatedConfig.costs);
  const parameterKeys = Object.keys(calculatedConfig.parameters);
  const dailyRate = calculatedConfig.constants.dailyrate.value;
  console.log("Keys for the calculation:", costKeys);
  console.log("Using this config for the calculation", config);

  //lets iterate through all cost fields and add up effort where needed
  const calcResult = costKeys.map((costkey: any) => {
    //for that costkey, check all parameter fields if there are effort. But only for the selected ones.

    calculatedConfig.costs[costkey].value = 0; //reset (just in case there was a default value)
    parameterKeys.map((param: any) => {
      console.log("Checking parameter", param);
      const selectedParameter = config.parameters[param].values.filter(
        (x: any) => x.selected
      )[0]; //I hope that only one parameter is set to true!

      //console.log("Selected parameter", selectedParameter);

      //now use the selected parameter and add everything together

      //for the calculation runner, we don't need the flag if it's selected and what the inputFactor was
      const filteredValues = Object.fromEntries(
        Object.entries(selectedParameter).filter(
          ([key, _]) => key !== "inputFactor" && key !== "selected"
        )
      );
      /*console.log(
        "Adding some efforts",
        calculatedConfig.costs[costkey].value,
        filteredValues[costkey]
      );*/
      calculatedConfig.costs[costkey].value +=
        parseInt(filteredValues[costkey] as string) *
        calculatedConfig.constants.dailyrate.value;
    });
  });

  console.log("Engine finished the calculation, here we go:", calculatedConfig);

  return calculatedConfig;
}
