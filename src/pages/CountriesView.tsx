import { Countries } from 'components';
import CountriesListQueryManager from 'components/CountriesList/CountriesListQueryManager';
import * as React from 'react';

export function CountriesView() {
  return (
    <React.Fragment>
      <CountriesListQueryManager>
        <Countries />
      </CountriesListQueryManager>
    </React.Fragment>
  );
}
