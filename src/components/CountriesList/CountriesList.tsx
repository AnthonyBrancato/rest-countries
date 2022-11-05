import * as React from 'react';

import { Card } from 'components';
import { useCountriesListQueryManager } from './CountriesListQueryManager';
import { FixedSizeList as List } from 'react-window';

function CountriesList() {
  const { data } = useCountriesListQueryManager();

  if (!data) return null;

  return (
    <React.Fragment>
      <List
        itemData={data}
        itemSize={400}
        itemCount={data?.length}
        width={350}
        height={800}
      >
        {({ data, index, style }) => {
          return <Card key={index} data={data[index]} style={style} />;
        }}
      </List>
    </React.Fragment>
  );
}

export default CountriesList;
