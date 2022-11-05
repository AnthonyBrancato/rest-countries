import * as React from 'react';
import { Card as MUICard, CardContent, CardMedia } from '@mui/material';

import { Countries } from 'api/queries/useCountriesListQuery';
import Heading from 'components/Heading';
import { CardMetadata } from './CardMetadata';

interface Props {
  data: Countries;
  style?: React.CSSProperties;
}

function Card({ data, style }: Props) {
  const {
    capital,
    flags: { png },
    name,
    population,
    region,
  } = data;

  const metadata = React.useMemo(() => {
    return { capital, population, region };
  }, [capital, population, region]);

  return (
    <MUICard style={style}>
      <CardMedia component="img" alt="country-flag" image={png} />
      <CardContent>
        <Heading>{name?.name?.official}</Heading>
        <CardMetadata metadata={metadata} />
      </CardContent>
    </MUICard>
  );
}

export default Card;
