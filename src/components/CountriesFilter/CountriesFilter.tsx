import * as React from 'react';

import SelectDropdown from 'components/SelectDropdown';

function CountriesFilter() {
  const filterOptions = React.useMemo(() => {
    return [
      {
        name: 'Africa',
        value: 'Africa',
      },
      {
        name: 'America',
        value: 'America',
      },
      {
        name: 'Asia',
        value: 'Asia',
      },
      {
        name: 'Europe',
        value: 'Europe',
      },
      {
        name: 'Oceania',
        value: 'Oceania',
      },
    ];
  }, []);

  return (
    <div className="mt-10">
      <SelectDropdown options={filterOptions} />
    </div>
  );
}

export default CountriesFilter;
