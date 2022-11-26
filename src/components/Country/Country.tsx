import { Skeleton } from '@mui/material';
import { useCountriesListQueryResult } from 'api/queries/useCountriesListQuery';
import Card from 'components/Card';
import { useCountryQueryManager } from './CountryQueryManager';

function Country() {
  const { data } = useCountryQueryManager();
  const result = useCountriesListQueryResult();

  console.log(result);

  if (!data) return <Skeleton variant="rectangular" width={200} />;
  return <Card data={data} />;
}

export default Country;
