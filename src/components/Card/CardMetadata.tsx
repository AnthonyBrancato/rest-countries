import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  metadata: {
    capital: string[];
    population: number;
    region: string;
  };
}

export function CardMetadata({ metadata }: Props) {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <p>
        <span>{t('card.metadata.population.title')}</span>:{' '}
        {metadata.population}
      </p>
      <p>
        <span>{t('card.metadata.region.title')}</span>: {metadata.region}
      </p>
      <p>
        <span>{t('card.metadata.capital.title')}</span>: {metadata.capital}
      </p>
    </React.Fragment>
  );
}
