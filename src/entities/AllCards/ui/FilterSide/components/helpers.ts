export const allGradingCompany = [
  'PSA',
  'PSA/DNA',
  'Beckett',
  'KSA',
  'CGC Trading Cards',
  'CSG',
  'Rare Edition',
  'UDA',
  'Steiner',
  'BBCE',
  'SGC',
  'CGS',
];

export const getError = (valueMin: string, valueMax: string) => {
  if (valueMax) return +valueMin > +valueMax;
};
