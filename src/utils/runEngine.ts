import { EstimatorConfig } from '../../src/types/estimatorConfigType';

// Definiere erlaubte Unit-Typen
type AllowedUnit = 'dailyrate' | 'licensefee' | 'runcosts' | 'tcoduration';

// Hilfsfunktion zur Validierung der Unit
function isValidUnit(unit: string): unit is AllowedUnit {
  return ['dailyrate', 'licensefee', 'runcosts', 'tcoduration'].includes(unit);
}

export default function runEngine(config: EstimatorConfig) {
  const calculatedConfig = { ...config };

  const costKeys = Object.keys(calculatedConfig.costs);
  const parameterKeys = Object.keys(calculatedConfig.parameters);
  console.log('Keys for the calculation:', costKeys);
  console.log('Using this config for the calculation', config);

  costKeys.forEach((costkey) => {
    // Unit sicher extrahieren und validieren
    const unit = calculatedConfig.costs[costkey].unit;

    if (!isValidUnit(unit)) {
      console.error(`Invalid unit "${unit}" found for cost key "${costkey}"`);
      return; // Diese Kostenposition überspringen
    }

    const propFactor = calculatedConfig.constants[unit].value;

    if (costkey === 'licenses') {
      console.log("Processing 'licenses' cost key:", calculatedConfig.costs[costkey]);
      console.log("Processing 'licenses' cost key:", unit);
      console.log('Factor value:', propFactor);
    }

    calculatedConfig.costs[costkey].value = 0;

    parameterKeys.forEach((param) => {
      const selectedParameter = config.parameters[param].values.filter((x) => x.selected)[0];

      const filteredValues = Object.fromEntries(
        Object.entries(selectedParameter).filter(
          ([key]) => key !== 'inputFactor' && key !== 'selected'
        )
      );

      if (filteredValues[costkey]) {
        calculatedConfig.costs[costkey].value +=
          parseInt(filteredValues[costkey] as string) * propFactor;
      }
    });
  });

  return calculatedConfig;
}
