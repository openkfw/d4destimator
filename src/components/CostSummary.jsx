import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const CostSummary = ({ totalInitial, totalRun, totalCostOfOwnership }) => {
  return (
    <Box p={2} component={Paper}>
      <Typography variant="h6">Total Initial Cost: {totalInitial} €</Typography>
      <Typography variant="h6">Total Run Cost per Year: {totalRun} €</Typography>
      <Typography variant="h6">Total Cost of Ownership (3 years): {totalCostOfOwnership} €</Typography>
    </Box>
  );
};

export default CostSummary;