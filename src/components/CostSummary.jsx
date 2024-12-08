import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";

const CostSummary = ({ totalInitial, totalRun, totalCostOfOwnership }) => {
  return (
    <Box p={2} component={Paper}>
      <Grid container spacing={2} direction="row" alignItems="flex-start">
        <Grid size={6}>
          <Typography align="left">Total Initial Cost:</Typography>
        </Grid>
        <Grid size={6}>{totalInitial} €</Grid>
      </Grid>
      <Grid container item spacing={2} direction="row" alignItems="flex-start">
        <Grid size={6}>
          <Typography align="left">Total Run Cost per Year:</Typography>
        </Grid>
        <Grid size={6}>{totalRun} €</Grid>
      </Grid>
      <Grid container item spacing={2} direction="row" alignItems="flex-start">
        <Grid size={6}>
          <Typography align="left" sx={{ fontWeight: "bold" }}>
            Total Cost of Ownership (3 years):
          </Typography>
        </Grid>

        <Grid size={6}>
          <Typography sx={{ fontWeight: "bold" }}>
            {totalCostOfOwnership} €
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CostSummary;
