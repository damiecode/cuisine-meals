const categoryFilter = (arr, category) => {
  if (!category) return arr;

  return arr.filter(meal => category.includes(meal.category));
};

export default categoryFilter;
