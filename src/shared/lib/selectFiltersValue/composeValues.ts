export const composeValues = (
  min: string,
  max: string,
  field: 'price' | 'year' | 'generic',
) => {
  if (min !== '' && max === '') {
    if (field === 'price') return `from $${min}`;
    if (field === 'year') return `year from ${min}`;
    if (field === 'generic') return `generic grade from ${min}`;
  }
  if (min === '' && max !== '') {
    if (field === 'price') return `to $${max}`;
    if (field === 'year') return `year to ${max}`;
    if (field === 'generic') return `generic grade to ${max}`;
  }
  if (min !== '' && max !== '') {
    if (field === 'price') return `$${min} - ${max}`;
    if (field === 'year') return `year: ${min} - ${max}`;
    if (field === 'generic') return `generic grade: ${min} - ${max}`;
  }
  return null;
};
