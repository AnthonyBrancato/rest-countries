import * as React from 'react';
import { noop } from 'lodash';
import { useCountriesListQueryManager } from 'components/CountriesList/CountriesListQueryManager';
import { Countries } from 'api/queries/useCountriesListQuery';

interface CountriesSearchManagerContextProps {
  searchedCountry: Countries[] | undefined;
  searchCountry: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  filteredData?: Countries[];
}

const CountriesSearchManagerContext =
  React.createContext<CountriesSearchManagerContextProps>({
    searchCountry: noop,
    searchedCountry: undefined,
    isLoading: false,
    filteredData: undefined,
  });

function CountriesSearchManager({ children }: { children: React.ReactNode }) {
  const [searchInput, setSearchInput] = React.useState<string>('');
  const { data, isLoading } = useCountriesListQueryManager();

  const searchCountry = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event.target.value);
    },
    []
  );

  const searchedCountry = React.useMemo(() => {
    return data?.filter(
      (country) =>
        country?.name?.common.toLowerCase() === searchInput.toLowerCase()
    );
  }, [data, searchInput]);

  const filteredData = React.useMemo(() => {
    return !searchedCountry?.length ? data : searchedCountry;
  }, [data, searchedCountry]);

  return (
    <CountriesSearchManagerContext.Provider
      value={{
        isLoading,
        searchCountry,
        searchedCountry,
        filteredData,
      }}
    >
      {children}
    </CountriesSearchManagerContext.Provider>
  );
}

export const useCountriesSearchManager = () => {
  return React.useContext(CountriesSearchManagerContext);
};

export default CountriesSearchManager;
