import { FormControl, InputLabel, MenuItem, Select, Typography, Box } from '@mui/material';
import React from 'react';
import runEngine from '../utils/runEngine';
import { GeneratedConstantsProps } from '../types/estimatorConfigType';
import TooltipWrapper from './TooltipWrapper';

const GeneratedEstimator: React.FC<GeneratedConstantsProps> = ({
  estimatorConfig,
  setCalculation,
}) => {
  const parameters = estimatorConfig.parameters;
  console.log('Rendering input parameters', parameters);
  const handleChange = (key: string, value: string) => {
    console.log('Changing input', key, value); //e.g. users, 50+

    //for that field, set all selected options to false and toggle the selected to true
    const newEstimatorConfig = { ...estimatorConfig };

    newEstimatorConfig.parameters[key].values.forEach((v) => {
      console.log('Changing this field', v);
      v.selected = false;
      if (v.inputFactor === value) {
        console.log('Found match', v);
        v.selected = true;
      }
    });

    console.log('Updated estimator config', newEstimatorConfig);

    setCalculation(runEngine(newEstimatorConfig));
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {estimatorConfig.flavour} parameters
      </Typography>
      <div>
        {Object.entries(parameters).map(([field, data]) => (
          <Box key={field} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 2 }}>
            <FormControl fullWidth>
              <InputLabel id={`${field}-label`}>{data.label}</InputLabel>
              <Select
                sx={{ fontPalette: 'black' }}
                labelId={`${field}-label`}
                id={`${field}-select`}
                label={data.label}
                value={data.values.find((d) => d.selected)?.inputFactor || ''}
                onChange={(e) => handleChange(field, e.target.value)}
              >
                {data.values.map((option, index) => (
                  <MenuItem key={index} value={option.inputFactor}>
                    {option.inputFactor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {data.tooltip && (
              <TooltipWrapper tooltip={data.tooltip}>
                <Box sx={{ display: 'flex', alignItems: 'center', minHeight: '56px' }}>
                  {/* Empty box to position the tooltip icon next to the Select */}
                </Box>
              </TooltipWrapper>
            )}
          </Box>
        ))}
      </div>
    </div>
  );
};

export default GeneratedEstimator;
