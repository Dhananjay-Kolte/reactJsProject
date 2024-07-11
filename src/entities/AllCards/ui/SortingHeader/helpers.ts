export const defaultSort = (typePage: TypesPage) => {
  if (typePage === 'allCards' || typePage === 'profile') return 'Newest';
  if (typePage === 'burned')
    return 'Newest - based on the date of burning cards';
  return 'List Date: Newest to Oldest';
};

export const nameInValue = (value: string) => {
  if (value === 'Name: A-Z') return 'nameAsc';
  if (value === 'Name: Z-A') return 'nameDesc';
  if (value === 'Year: Newest to Oldest') return 'yearDesc';
  if (value === 'Year: Oldest to Newest') return 'yearAsc';
  if (value === 'Price: Low to High' || value === 'Insured Value: Low to High')
    return 'priceAsc';
  if (value === 'Price: High to Low' || value === 'Insured Value: High to Low')
    return 'priceDesc';
  if (
    value === 'List Date: Newest to Oldest' ||
    value === 'Newest' ||
    value === 'Newest - based on the date of burning cards'
  )
    return 'dateDesc';
  if (
    value === 'List Date: Oldest to Newest' ||
    value === 'Oldest' ||
    value === 'Oldest - based on the date of burning cards'
  )
    return 'dateAsc';
  return '';
};

export const valueInName = (value: string, typePage: TypesPage) => {
  if (value === 'nameAsc') return 'Name: A-Z';
  if (value === 'nameDesc') return 'Name: Z-A';
  if (value === 'yearDesc') return 'Year: Newest to Oldest';
  if (value === 'yearAsc') return 'Year: Oldest to Newest';
  if (value === 'priceAsc') {
    if (typePage === 'allCards' || typePage === 'profile')
      return 'Insured Value: Low to High';
    return 'Price: Low to High';
  }
  if (value === 'priceDesc') {
    if (typePage === 'allCards' || typePage === 'profile')
      return 'Insured Value: High to Low';
    return 'Price: High to Low';
  }
  if (value === 'dateDesc') {
    if (typePage === 'allCards' || typePage === 'profile') return 'Newest';
    if (typePage === 'burned')
      return 'Newest - based on the date of burning cards';
    return 'List Date: Newest to Oldest';
  }
  if (value === 'dateAsc') {
    if (typePage === 'allCards' || typePage === 'profile') return 'Oldest';
    if (typePage === 'burned')
      return 'Oldest - based on the date of burning cards';
    return 'List Date: Oldest to Newest';
  }
  return '';
};

export const getSortItem = (typePage: TypesPage) => {
  if (typePage === 'allCards' || typePage === 'profile')
    return [
      { content: 'Name: A-Z', value: 'Name: A-Z' },
      { content: 'Name: Z-A', value: 'Name: Z-A' },
      { content: 'Newest', value: 'Newest' },
      { content: 'Oldest', value: 'Oldest' },
      {
        content: 'Insured Value: Low to High',
        value: 'Insured Value: Low to High',
      },
      {
        content: 'Insured Value: High to Low',
        value: 'Insured Value: High to Low',
      },
      { content: 'Year: Newest to Oldest', value: 'Year: Newest to Oldest' },
      { content: 'Year: Oldest to Newest', value: 'Year: Oldest to Newest' },
    ];

  if (typePage === 'marketplace')
    return [
      { content: 'Name: A-Z', value: 'Name: A-Z' },
      { content: 'Name: Z-A', value: 'Name: Z-A' },
      { content: 'Price: Low to High', value: 'Price: Low to High' },
      { content: 'Price: High to Low', value: 'Price: High to Low' },
      {
        content: 'List Date: Newest to Oldest',
        value: 'List Date: Newest to Oldest',
      },
      {
        content: 'List Date: Oldest to Newest',
        value: 'List Date: Oldest to Newest',
      },
      { content: 'Year: Newest to Oldest', value: 'Year: Newest to Oldest' },
      { content: 'Year: Oldest to Newest', value: 'Year: Oldest to Newest' },
    ];

  return [
    { content: 'Name: A-Z', value: 'Name: A-Z' },
    { content: 'Name: Z-A', value: 'Name: Z-A' },
    {
      content: 'Newest - based on the date of burning cards',
      value: 'Newest - based on the date of burning cards',
    },
    {
      content: 'Oldest - based on the date of burning cards',
      value: 'Oldest - based on the date of burning cards',
    },
    {
      content: 'Insured Value: Low to High',
      value: 'Insured Value: Low to High',
    },
    {
      content: 'Insured Value: High to Low',
      value: 'Insured Value: High to Low',
    },
    { content: 'Year: Newest to Oldest', value: 'Year: Newest to Oldest' },
    { content: 'Year: Oldest to Newest', value: 'Year: Oldest to Newest' },
  ];
};
