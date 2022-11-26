import { formatNumber } from 'helpers/formatNumber';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  metadata: {
    capital?: string[];
    population?: number;
    region?: string;
  };
}

export function CardMetadata({ metadata }: Props) {
  const { capital, population, region } = metadata;
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <p>
        <span className="font-semibold">
          {t('card.metadata.population.title')}
        </span>
        : {formatNumber(population)}
      </p>
      <p>
        <span className="font-semibold">{t('card.metadata.region.title')}</span>
        : {region}
      </p>
      <p>
        <span className="font-semibold">
          {t('card.metadata.capital.title')}
        </span>
        : {capital}
      </p>
    </React.Fragment>
  );
}
