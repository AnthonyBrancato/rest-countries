import { Country } from 'components';
import CountriesListQueryManager from 'components/CountriesList/CountriesListQueryManager';
import CountryQueryManager from 'components/Country/CountryQueryManager';

function CountryView() {
  return (
    <CountriesListQueryManager>
      <CountryQueryManager>
        <Country />
      </CountryQueryManager>
    </CountriesListQueryManager>
  );
}

export default CountryView;
