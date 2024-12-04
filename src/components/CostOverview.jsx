import React, { useState } from 'react';

const CostOverview = () => {
  const [costs, setCosts] = useState({
    hardwareInitial: '',
    hardwareRun: '',
    procurementInitial: '',
    procurementRun: '',
    infrastructureInitial: '',
    infrastructureRun: '',
    integrationInitial: '',
    integrationRun: '',
    securityInitial: '',
    securityRun: '',
    monitoringInitial: '',
    monitoringRun: '',
    documentationInitial: '',
    documentationRun: '',
    changeManagementInitial: '',
    changeManagementRun: '',
    adminTrainingInitial: '',
    adminTrainingRun: '',
    userTrainingInitial: '',
    userTrainingRun: '',
    adminOverheadInitial: '',
    adminOverheadRun: '',
    analysisDesignInitial: '',
  });

  const handleChange = (field, value) => {
    setCosts(prevCosts => ({
      ...prevCosts,
      [field]: value
    }));
  };

  const totalInitial = Object.keys(costs).filter(key => key.endsWith('Initial')).reduce((acc, key) => acc + (parseFloat(costs[key]) || 0), 0);
  const totalRun = Object.keys(costs).filter(key => key.endsWith('Run')).reduce((acc, key) => acc + (parseFloat(costs[key]) || 0), 0);

  return (
    <table>
      <thead>
        <tr>
          <th>Components</th>
          <th>Initial cost</th>
          <th>Run Cost per year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Initial analyse and design</td>
          <td><input type="text" value={costs.analysisDesignInitial} onChange={(e) => handleChange('analysisDesignInitial', e.target.value)} /> €</td>
          <td></td>
        </tr>

        <tr>
          <td colSpan="3">Hard- and Software costs</td>
        </tr>
        <tr>
          <td>Hardware</td>
          <td><input type="text" value={costs.hardwareInitial} onChange={(e) => handleChange('hardwareInitial', e.target.value)} /> €</td>
          <td><input type="text" value={costs.hardwareRun} onChange={(e) => handleChange('hardwareRun', e.target.value)} /> €</td>
        </tr>
        <tr>
          <td colSpan="3">IT related staffing costs</td>
        </tr>
        <tr>
          <td>Procurement process</td>
          <td><input type="text" value={costs.procurementInitial} onChange={(e) => handleChange('procurementInitial', e.target.value)} /> €</td>
          <td><input type="text" value={costs.procurementRun} onChange={(e) => handleChange('procurementRun', e.target.value)} /> €</td>
        </tr>
        <tr>
          <td>Infrastructure configuration</td>
          <td><input type="text" value={costs.infrastructureInitial} onChange={(e) => handleChange('infrastructureInitial', e.target.value)} /> €</td>
          <td><input type="text" value={costs.infrastructureRun} onChange={(e) => handleChange('infrastructureRun', e.target.value)} /> €</td>
        </tr>
        <tr>
          <td>Integration of other systems via API</td>
          <td><input type="text" value={costs.integrationInitial} onChange={(e) => handleChange('integrationInitial', e.target.value)} /> €</td>
          <td><input type="text" value={costs.integrationRun} onChange={(e) => handleChange('integrationRun', e.target.value)} /> €</td>
        </tr>
        <tr>
          <td colSpan="3">Staffing costs</td>
        </tr>
        <tr>
          <td>Security setup</td>
          <td><input type="text" value={costs.securityInitial} onChange={(e) => handleChange('securityInitial', e.target.value)} /> €</td>
          <td><input type="text" value={costs.securityRun} onChange={(e) => handleChange('securityRun', e.target.value)} /> €</td>
        </tr>
        <tr>
          <td>Monitoring setup</td>
          <td><input type="text" value={costs.monitoringInitial} onChange={(e) => handleChange('monitoringInitial', e.target.value)} /> €</td>
          <td><input type="text" value={costs.monitoringRun} onChange={(e) => handleChange('monitoringRun', e.target.value)} /> €</td>
        </tr>
        <tr>
          <td>Adapt documentation to local requirements</td>
          <td><input type="text" value={costs.documentationInitial} onChange={(e) => handleChange('documentationInitial', e.target.value)} /> €</td>
          <td><input type="text" value={costs.documentationRun} onChange={(e) => handleChange('documentationRun', e.target.value)} /> €</td>
        </tr>
        <tr>
          <td>Change Management business processes</td>
          <td><input type="text" value={costs.changeManagementInitial} onChange={(e) => handleChange('changeManagementInitial', e.target.value)} /> €</td>
          <td><input type="text" value={costs.changeManagementRun} onChange={(e) => handleChange('changeManagementRun', e.target.value)} /> €</td>
        </tr>
        <tr>
          <td>Administrator training</td>
          <td><input type="text" value={costs.adminTrainingInitial} onChange={(e) => handleChange('adminTrainingInitial', e.target.value)} /> €</td>
          <td><input type="text" value={costs.adminTrainingRun} onChange={(e) => handleChange('adminTrainingRun', e.target.value)} /> €</td>
        </tr>
        <tr>
          <td>User training</td>
          <td><input type="text" value={costs.userTrainingInitial} onChange={(e) => handleChange('userTrainingInitial', e.target.value)} /> €</td>
          <td><input type="text" value={costs.userTrainingRun} onChange={(e) => handleChange('userTrainingRun', e.target.value)} /> €</td>
        </tr>
        <tr>
          <td>Admin overhead</td>
          <td><input type="text" value={costs.adminOverheadInitial} onChange={(e) => handleChange('adminOverheadInitial', e.target.value)} /> €</td>
          <td><input type="text" value={costs.adminOverheadRun} onChange={(e) => handleChange('adminOverheadRun', e.target.value)} /> €</td>
        </tr>
        <tr>
          <td>Total costs for Partner</td>
          <td>{totalInitial} €</td>
          <td>{totalRun} €</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CostOverview;