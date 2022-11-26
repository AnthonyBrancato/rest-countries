import { DarkMode } from '@mui/icons-material';
import { Box, AppBar as MUIAppBar, Toolbar } from '@mui/material';

import Button from 'components/Button';
import Heading from 'components/Heading';
import { useTranslation } from 'react-i18next';

function AppBar() {
  const { t } = useTranslation();

  return (
    <MUIAppBar component="nav" className="app-bar">
      <Toolbar className="flex justify-between">
        <div>
          <Heading className="heading-lg heading-lg-bold typo-text">
            {t('app_bar.title')}
          </Heading>
        </div>
        <Box sx={{ display: { sm: 'block' } }}>
          <Button variant="text" startIcon={<DarkMode />} className="typo-text">
            {t('app_bar.button.dark_mode.title')}
          </Button>
        </Box>
      </Toolbar>
    </MUIAppBar>
  );
}

export default AppBar;
