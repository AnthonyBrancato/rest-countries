import * as React from 'react';

import { Card } from 'components';
import { FixedSizeList as List } from 'react-window';
import { useCountriesSearchManager } from 'components/CountriesSearch/CountriesSearchManager';
import { Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';

function CountriesList() {
  const { filteredData } = useCountriesSearchManager();

  return (
    <div className="flex justify-center mt-4">
      {!filteredData ? (
        <Skeleton variant="rectangular" width={250} height={200} />
      ) : (
        <List
          itemData={filteredData}
          itemSize={336}
          itemCount={filteredData?.length}
          width={267}
          height={800}
        >
          {({ data, index, style }) => {
            return (
              <Link to={`${filteredData[index]?.name?.common.toLowerCase()}`}>
                <Card key={index} data={data[index]} style={style} />
              </Link>
            );
          }}
        </List>
      )}
    </div>
  );
}

export default CountriesList;
