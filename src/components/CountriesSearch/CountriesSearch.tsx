import * as React from 'react';
import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useCountriesSearchManager } from './CountriesSearchManager';
import { Search } from '@mui/icons-material';

function CountriesSearch({ ...props }: TextFieldProps) {
  const { t } = useTranslation();
  const { searchCountry } = useCountriesSearchManager();

  return (
    <div className="mt-6">
      <TextField
        {...props}
        onChange={searchCountry}
        placeholder={t('search_bar.placeholder')}
        className="w-full"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default CountriesSearch;
