export const normalizeCategoryName = (category) => {
  return category.replace('FAKE: ', '').trim().toLowerCase();
};
