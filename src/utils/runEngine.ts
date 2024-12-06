export default function runEngine(config: any) {
  const calculatedConfig = { ...config };

  //the list of relevant efforts is in the results field, take this
  const costKeys = Object.keys(calculatedConfig.costs);
  const parameterKeys = Object.keys(calculatedConfig.parameters);
  console.log("Keys for the calculation:", costKeys);
  console.log("Using this config for the calculation", config);

  //lets iterate through all cost fields and add up effort where needed
  const calcResult = costKeys.map((costkey) => {
    //for that costkey, check all parameter fields if there are effort. But only for the selected ones.
    calculatedConfig.costs[costkey].value = 100; //test
    parameterKeys.map((param: any) => {
      console.log("Checking parameter", param);
      const selectedParameter = config.parameters[param].values.filter(
        (x: any) => x.selected == true,
      );
      console.log("Selected parameter", selectedParameter);
    });

    //TODO multiply this with the daily rate
  });

  console.log("Engine finished the calculation, here we go:", calculatedConfig);

  return calculatedConfig;
}
