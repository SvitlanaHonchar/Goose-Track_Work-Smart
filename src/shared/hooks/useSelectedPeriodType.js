import { useState, useCallback } from 'react';

const useSelectedPeriodType = initialPeriodType => {
  const [periodType, setPeriodType] = useState(initialPeriodType);
  const handlePeriodTypeSelect = useCallback(type => {
    setPeriodType(type);
  }, []);
  return [periodType, handlePeriodTypeSelect];
};

export default useSelectedPeriodType;
