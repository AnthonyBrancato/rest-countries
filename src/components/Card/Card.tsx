import * as React from 'react';
import { Card as MUICard, CardContent, CardMedia } from '@mui/material';

import { Countries } from 'api/queries/useCountriesListQuery';
import Heading from 'components/Heading';
import { CardMetadata } from './CardMetadata';

interface Props {
  data?: Countries;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function Card({ data, style, onClick }: Props) {
  const { capital, flags, name, population, region } = data || {};

  const metadata = React.useMemo(() => {
    return { capital, population, region };
  }, [capital, population, region]);

  return (
    <MUICard style={style} className="flex flex-col shadow-xl">
      <CardMedia
        component="img"
        alt="country-flag"
        image={flags?.png}
        style={{
          height: '160px',
        }}
      />
      <CardContent>
        <Heading className="!font-bold">{name?.common}</Heading>
        <CardMetadata metadata={metadata} />
      </CardContent>
    </MUICard>
  );
}

export default Card;
