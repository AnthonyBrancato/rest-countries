import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { useCountriesListQueryManager } from './CountriesListQueryManager';

const CountryList = ({ capital, population, region, name, style }: any) => {
  return (
    <ul style={style}>
      <li>Capital: {capital}</li>
      <li>Population: {population}</li>
      <li>Region: {region}</li>
      <li>Name: {name}</li>
    </ul>
  );
};

function CountriesList() {
  const { data } = useCountriesListQueryManager();

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          itemCount={data?.length || 25}
          itemData={data}
          itemSize={35}
        >
          {CountryList}
        </List>
      )}
    </AutoSizer>
  );
}

export default CountriesList;
