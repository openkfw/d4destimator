import React, { useEffect, useState } from 'react';

import './App.css';

import CostOverview from '../components/CostOverview';

import GeneratedEstimator from '../components/GeneratedEstimator';
import runEngine from '../utils/runEngine';

import estimatorConfig from '../assets/dashboard_config.json';
import { EstimatorConfig } from '../types/estimatorConfigType';

import { Box, Container, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import GeneratedConstants from '../components/GeneratedConstants';

const estimatorConfigTyped: EstimatorConfig = estimatorConfig;

function App() {
  const [calculation, setCalculation] = useState(estimatorConfigTyped);
  useEffect(() => {
    const result = runEngine(estimatorConfigTyped);
    setCalculation(result);

    console.log('Running engine:', result);
  }, []);

  return (
    <div className="App">
      <Box
        sx={{
          minHeight: '100vh',
          background:
            ' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,48,5,1) 35%, rgba(19,4,136,1) 100%)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Content */}
        <Container sx={{ flex: 1, py: 4 }}>
          <Grid
            container
            spacing={4}
            sx={{
              height: '100%',
            }}
          >
            {/* Left Side */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 1.0)',
                }}
              >
                <div>
                  <GeneratedEstimator
                    estimatorConfig={calculation}
                    setCalculation={setCalculation}
                  />
                </div>
              </Paper>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  my: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 1.0)',
                }}
              >
                <div>
                  <GeneratedConstants
                    estimatorConfig={calculation}
                    setCalculation={setCalculation}
                  />
                </div>
              </Paper>
            </Grid>

            {/* Right Side */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.)',
                }}
              >
                <CostOverview config={calculation} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
