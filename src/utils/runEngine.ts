export default function runEngine(config: any) {
  const calculatedConfig = { ...config };

  //the list of relevant efforts is in the results field, take this
  const costKeys = Object.keys(calculatedConfig.costs);
  console.log("Keys for the calculation:", costKeys);

  return calculatedConfig;
}
