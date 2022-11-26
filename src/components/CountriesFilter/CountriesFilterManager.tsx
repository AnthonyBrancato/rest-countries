import { SelectChangeEvent } from '@mui/material';
import { noop } from 'lodash';
import * as React from 'react';

interface CountriesFilterManagerContextProps {
  filterValue?: string;
  setInputValue: (event: SelectChangeEvent) => void;
}

const CountriesFilterManagerContext =
  React.createContext<CountriesFilterManagerContextProps>({
    filterValue: '',
    setInputValue: noop,
  });

function CountriesFilterManager({ children }: { children: React.ReactNode }) {
  const [inputValue, setSearchValue] = React.useState<string>('');

  const setInputValue = React.useCallback((event: SelectChangeEvent) => {
    setSearchValue(event.target.value);
  }, []);

  return (
    <CountriesFilterManagerContext.Provider
      value={{
        filterValue: inputValue,
        setInputValue,
      }}
    >
      {children}
    </CountriesFilterManagerContext.Provider>
  );
}

export const useCountriesFilterManager = () =>
  React.useContext(CountriesFilterManagerContext);

export default CountriesFilterManager;
