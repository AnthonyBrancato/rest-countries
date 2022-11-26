import i18n from 'i18n';

export function formatNumber(nbToFormat?: number) {
  if (typeof nbToFormat !== 'number') return '-';
  if (!nbToFormat) return '-';
  return new Intl.NumberFormat(i18n.language).format(nbToFormat);
}
