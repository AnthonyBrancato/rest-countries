import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from '@mui/material';
import { useCountriesFilterManager } from 'components/CountriesFilter/CountriesFilterManager';
import { useTranslation } from 'react-i18next';

interface SelectFilterDropdownProps {
  options: {
    name: string;
    value: string;
  }[];
}

function SelectDropdown({ options }: SelectFilterDropdownProps) {
  const { t } = useTranslation();
  const { setInputValue, filterValue } = useCountriesFilterManager();

  return (
    <FormControl sx={{ m: 1, minWidth: 200, marginLeft: 0 }}>
      <InputLabel id="filter-by-region">
        {t('select_dropdown.filter.title')}
      </InputLabel>
      <Select
        labelId="filter-by-region"
        id="select-filter-by-region"
        input={
          <OutlinedInput
            id="select-filter-by-region"
            label={t('select_dropdown.filter.title')}
          />
        }
        value={filterValue}
        onChange={setInputValue}
      >
        {options?.map((option) => {
          return (
            <MenuItem key={option.name} value={option.value}>
              {t(
                `select_dropdown.filter.region.${t(option.name.toLowerCase())}`
              )}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default SelectDropdown;
