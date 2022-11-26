import { Country, useCountryQuery } from 'api/queries/useCountryQuery';
import * as React from 'react';
import {useParams} from "react-router-dom";

export interface CountryQueryManagerContextProps {
  data?: Country;
  isLoading?: boolean;
}

const CountryQueryManagerContext =
  React.createContext<CountryQueryManagerContextProps>({
    data: undefined,
    isLoading: false,
  });

function CountryQueryManager({ children }: { children: React.ReactNode }) {
    const { name } = useParams();
  const { data, isLoading } = useCountryQuery(name as string);

  return (
    <CountryQueryManagerContext.Provider
      value={{
        data,
        isLoading,
      }}
    >
      {children}
    </CountryQueryManagerContext.Provider>
  );
}

export const useCountryQueryManager = () =>
  React.useContext(CountryQueryManagerContext);

export default CountryQueryManager;
