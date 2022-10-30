import {
  Countries,
  useCountriesListQuery,
} from 'api/queries/useCountriesListQuery';
import * as React from 'react';

interface ICountriesListQueryManagerContext {
  data: Countries[] | undefined;
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
}

const CountriesListQueryManagerContext =
  React.createContext<ICountriesListQueryManagerContext>({
    data: [],
    isError: false,
    isLoading: false,
    isFetching: false,
  });

function CountriesListQueryManager({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, isError, isLoading, isFetching } = useCountriesListQuery();

  return (
    <CountriesListQueryManagerContext.Provider
      value={{
        data,
        isError,
        isLoading,
        isFetching,
      }}
    >
      {children}
    </CountriesListQueryManagerContext.Provider>
  );
}

export const useCountriesListQueryManager = () =>
  React.useContext(CountriesListQueryManagerContext);

export default CountriesListQueryManager;
