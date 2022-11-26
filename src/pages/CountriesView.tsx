import {
  AppBar,
  CountriesLayout,
  CountriesList,
  CountriesSearch,
  CountriesFilter,
} from 'components';
import CountriesFilterManager from 'components/CountriesFilter/CountriesFilterManager';
import CountriesListQueryManager from 'components/CountriesList/CountriesListQueryManager';
import CountriesSearchManager from 'components/CountriesSearch/CountriesSearchManager';
import * as React from 'react';

export function CountriesView() {
  return (
    <React.Fragment>
      <AppBar />
      <CountriesListQueryManager>
        <CountriesSearchManager>
          <CountriesFilterManager>
            <CountriesLayout>
              <CountriesSearch />
              <CountriesFilter />
              <CountriesList />
            </CountriesLayout>
          </CountriesFilterManager>
        </CountriesSearchManager>
      </CountriesListQueryManager>
    </React.Fragment>
  );
}
