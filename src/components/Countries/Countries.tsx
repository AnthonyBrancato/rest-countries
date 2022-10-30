import AppBar from 'components/AppBar';
import CountriesList from 'components/CountriesList';
import CountriesSearch from 'components/CountriesSearch';
import * as React from 'react';

function Countries() {
  return (
    <React.Fragment>
      <AppBar />
      {/* <CountriesSearchFilterManager> */}
      <CountriesSearch />
      <CountriesList />
      {/* </CountriesSearchFilterManager> */}
    </React.Fragment>
  );
}

export default Countries;
