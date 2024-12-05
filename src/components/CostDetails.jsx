import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Paper } from '@mui/material';

const CostDetails = ({ costs, handleChange }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }}>Components at Partner</TableCell>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }}>Initial cost</TableCell>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }}>Run Cost per year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={3}>Hard- and Software costs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Hardware</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.hardwareInitial}
                onChange={(e) => handleChange('hardwareInitial', e.target.value)}
                variant="outlined"
                size="small"
                style={{ margin: 0, padding: 0 }}
              /> €
            </TableCell>
            <TableCell>{costs.hardwareRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}>IT related staffing costs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Procurement process</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.procurementInitial}
                onChange={(e) => handleChange('procurementInitial', e.target.value)}
                variant="outlined"
                size="small"
                style={{ margin: 0, padding: 0 }}
              /> €
            </TableCell>
            <TableCell>{costs.procurementRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Infrastructure configuration</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.infrastructureInitial}
                onChange={(e) => handleChange('infrastructureInitial', e.target.value)}
                variant="outlined"
                size="small"
                style={{ margin: 0, padding: 0 }}
              /> €
            </TableCell>
            <TableCell>{costs.infrastructureRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Integration of other systems via API</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.integrationInitial}
                onChange={(e) => handleChange('integrationInitial', e.target.value)}
                variant="outlined"
                size="small"
                style={{ margin: 0, padding: 0 }}
              /> €
            </TableCell>
            <TableCell>{costs.integrationRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}>Staffing costs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Security setup</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.securityInitial}
                onChange={(e) => handleChange('securityInitial', e.target.value)}
                variant="outlined"
                size="small"
                style={{ margin: 0, padding: 0 }}
              /> €
            </TableCell>
            <TableCell>{costs.securityRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Monitoring setup</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.monitoringInitial}
                onChange={(e) => handleChange('monitoringInitial', e.target.value)}
                variant="outlined"
                size="small"
                style={{ margin: 0, padding: 0 }}
              /> €
            </TableCell>
            <TableCell>{costs.monitoringRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Adapt documentation to local requirements</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.documentationInitial}
                onChange={(e) => handleChange('documentationInitial', e.target.value)}
                variant="outlined"
                size="small"
                style={{ margin: 0, padding: 0 }}
              /> €
            </TableCell>
            <TableCell>{costs.documentationRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Change Management business processes</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.changeManagementInitial}
                onChange={(e) => handleChange('changeManagementInitial', e.target.value)}
                variant="outlined"
                size="small"
                style={{ margin: 0, padding: 0 }}
              /> €
            </TableCell>
            <TableCell>{costs.changeManagementRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Administrator training</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.adminTrainingInitial}
                onChange={(e) => handleChange('adminTrainingInitial', e.target.value)}
                variant="outlined"
                size="small"
                style={{ margin: 0, padding: 0 }}
              /> €
            </TableCell>
            <TableCell>{costs.adminTrainingRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>User training</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.userTrainingInitial}
                onChange={(e) => handleChange('userTrainingInitial', e.target.value)}
                variant="outlined"
                size="small"
                style={{ margin: 0, padding: 0 }}
              /> €
            </TableCell>
            <TableCell>{costs.userTrainingRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Admin overhead</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.adminOverheadInitial}
                onChange={(e) => handleChange('adminOverheadInitial', e.target.value)}
                variant="outlined"
                size="small"
                style={{ margin: 0, padding: 0 }}
              /> €
            </TableCell>
            <TableCell>{costs.adminOverheadRun} €</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Initial analyse and design</TableCell>
            <TableCell>
              <TextField
                type="text"
                value={costs.analysisDesignInitial}
                onChange={(e) => handleChange('analysisDesignInitial', e.target.value)}
                variant="outlined"
                size="small"
                style={{ margin: 0, padding: 0 }}
              /> €
            </TableCell>
            <TableCell>-</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CostDetails;