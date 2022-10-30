import { DarkMode } from '@mui/icons-material';

import Button from 'components/Button';
import Heading from 'components/Heading';
import { useTranslation } from 'react-i18next';

function AppBar() {
  const { t } = useTranslation();

  return (
    <header className="flex flex-1 justify-between items-center h-20">
      <div>
        <Heading>{t('app_bar.title')}</Heading>
      </div>
      <div>
        <Button variant="text" startIcon={<DarkMode />}>
          {t('app_bar.button.dark_mode.title')}
        </Button>
      </div>
    </header>
  );
}

export default AppBar;
