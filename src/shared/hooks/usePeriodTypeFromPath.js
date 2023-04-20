import { useLocation } from 'react-router-dom';

const usePeriodTypeFromPath = () => {
  const location = useLocation();
  const pathArray = location.pathname.split('/');
  return pathArray[2];
};

export default usePeriodTypeFromPath;
