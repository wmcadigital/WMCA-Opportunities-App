const getFiltersGroup = (data, filter) => {
  const allFilters = [];
  data.map(el => {
    return allFilters.push(el[filter]);
  })

  const unique = new Set(allFilters.flat())
  return [...unique].flat();

}

export default getFiltersGroup;