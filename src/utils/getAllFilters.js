const getAllFilters = async (data) => {
  const allFilters = [];
  data.map( (el) => {
     return allFilters.push(el.Opportunity, el.Category, el.Eligibility, el.Age, el.SkillLevel, el.LiveIn )
  })

  const unique = new Set(allFilters.flat())
  return [...unique].flat();

}



export default getAllFilters;