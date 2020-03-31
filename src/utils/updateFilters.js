const updateFilters = async (arr, data, action) => {
  //const filters = new Set(arr);
  const adding = action === 'addFilterElement';
  if(adding) {
    arr.push(data)
  }else {
    arr = arr.filter( el => el !== data )
  }

  return arr;
}

export default updateFilters;