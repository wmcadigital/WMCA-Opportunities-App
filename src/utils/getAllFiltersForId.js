// import getAllFilters from './getAllFilters'

const getAllFiltersForId = async (data) => {
  const allFitersWithId = {};

  data.forEach(el => {
    allFitersWithId[el.Id] = getAllFilters([el]);
  });

  return allFitersWithId
}

export default getAllFiltersForId;


const getAllFilters = (data) => {
  const allFilters = [];
  data.map( (el) => {
     return allFilters.push(el.Opportunity, el.Category, el.Eligibility, el.Age, el.SkillLevel, el.LiveIn )
  })

  const unique = new Set(allFilters.flat())
  return [...unique].flat();

}