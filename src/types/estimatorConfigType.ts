import { Dispatch, SetStateAction } from 'react';

export interface Cost {
  label: string;
  tooltip?: string;
  value: number;
  category: string;
  unit: string;
}

export interface EstimatorConfig {
  flavour: string;
  author: string;
  version: string;
  parameters: {
    [key: string]: {
      label: string;
      tooltip?: string;
      values: Array<{
        inputFactor: string;
        selected: boolean;
        initialAnalysisDesign: string;
        procurement?: string;
        hardware?: string;
        infrastructureConfiguration?: string;
        integrationSystems?: string;
        securitySetup?: string;
        monitoringSetup?: string;
        documentationAdaptation?: string;
        changeManagement?: string;
        adminTraining?: string;
        userTraining?: string;
        adminOverhead?: string;
      }>;
    };
  };
  costs: {
    [key: string]: Cost;
  };
  constants: {
    licensefee: {
      label: string;
      tooltip?: string;
      currency: string;
      value: number;
    };

    dailyrate: {
      label: string;
      tooltip?: string;
      currency: string;
      value: number;
    };
    runcosts: {
      label: string;
      tooltip?: string;
      unit: string;
      value: number;
    };
    tcoduration: {
      label: string;
      tooltip?: string;
      unit: string;
      value: number;
    };
  };
}

export interface ConfigProps {
  config: EstimatorConfig;
}

export interface GeneratedConstantsProps {
  estimatorConfig: EstimatorConfig;
  setCalculation: Dispatch<SetStateAction<EstimatorConfig>>;
}

export default EstimatorConfig;
