import AppBar from 'components/AppBar';
import CountriesList from 'components/CountriesList';
import CountriesListQueryManager from 'components/CountriesList/CountriesListQueryManager';
import CountriesSearch from 'components/CountriesSearch';
import * as React from 'react';

function Countries() {
  return (
    <React.Fragment>
      <AppBar />
      <CountriesListQueryManager>
        {/* <CountriesSearchFilterManager> */}
        <CountriesSearch />
        <CountriesList />
        {/* </CountriesSearchFilterManager> */}
      </CountriesListQueryManager>
    </React.Fragment>
  );
}

export default Countries;
