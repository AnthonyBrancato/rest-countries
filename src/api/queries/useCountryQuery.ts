import axios from 'axios';
import ENVS from 'config/envs';
import { useQuery, useQueryClient } from 'react-query';
import {
  Countries,
  COUNTRIES_LIST_QUERY_KEY,
  useCountriesListQueryResult,
} from './useCountriesListQuery';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const COUNTRY_QUERY_KEY = 'country_query_key';

type Currencies = {
  [key: string]: Record<string, string>;
};

export interface Country extends Countries {
  subRegion: string;
  topLevelDomain: string;
  currencies: Currencies;
  languages: Record<string, string>;
  borders: string[];
}

async function fetchCountry({ queryKey }: { queryKey: string[] }) {
  const countryName = queryKey[1];
  const response = await axios.get(`${ENVS.API_URL}name/${countryName}`);
  return response?.data;
}

const countryDeserializer = (data: Country) => {
  const response: Country = Object.values(data)?.reduce((acc, country) => {
    return {
      ...acc,
      subRegion: country?.subregion,
      topLevelDomain: country?.tld,
      borders: country?.borders,
      currencies: country?.currencies,
      languages: country?.languages,
    };
  }, {});
  return response;
};

export const useCountryQuery = (name: string) => {
  const { t } = useTranslation();
  const countries = useCountriesListQueryResult();

  const errorMsg = t('country_query.error.title');

  return useQuery([COUNTRY_QUERY_KEY, name], fetchCountry, {
    select: countryDeserializer,
    onError: () => {
      toast(errorMsg);
    },
  });
};
