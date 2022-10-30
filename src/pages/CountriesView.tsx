import { AppBar, CountriesList, CountriesSearch } from 'components';
import CountriesListQueryManager from 'components/CountriesList/CountriesListQueryManager';
import * as React from 'react';

export function CountriesView() {
  return (
    <React.Fragment>
      <CountriesListQueryManager>
        <AppBar />
        <CountriesSearch />
        <CountriesList />
      </CountriesListQueryManager>
    </React.Fragment>
  );
}
