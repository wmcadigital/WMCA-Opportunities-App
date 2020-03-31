const filterArray = (filters, array) => {
  const filterKeys = Object.keys(filters);
  return array.filter(item => {
    // validates all filter criteria

    return filterKeys.forEach(key => {
      // ignores non-function predicates

      if (typeof filters[key] !== 'function') return true;

      return filters[key](item[key]);
    });
  });
}

export default filterArray;
