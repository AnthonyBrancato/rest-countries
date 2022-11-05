import React from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useQuery } from 'react-query';

import toast from 'react-hot-toast';

import ENVS from 'config/envs';

const QUERY_KEY = 'COUNTRIES_LIST';

type CountryName = {
  name: Record<string, any>;
};

export interface Countries {
  name: CountryName;
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
  };
}

async function fetchCountries() {
  const response = await axios.get(`${ENVS.API_URL}all`);
  return response?.data;
}

function countriesDeserializer(data: Countries[]) {
  return data?.map((country) => {
    return {
      name: country['name'],
      region: country['region'],
      capital: country['capital'],
      population: country['population'],
      flags: {
        png: country['flags']?.png,
      },
    };
  });
}

export const useCountriesListQuery = () => {
  const { t } = useTranslation();
  const errorMessage = t('query.error.title');

  const countries = useQuery([QUERY_KEY], fetchCountries, {
    select: countriesDeserializer,
  });

  React.useEffect(() => {
    if (countries.error) {
      toast.error(errorMessage);
    }
  }, [countries.error, errorMessage]);

  return countries;
};
