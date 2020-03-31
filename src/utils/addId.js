const addId = (data) => {

  arr = [];
  data.forEach(el => {
    arr[el.Id] = el;
  });
  return arr
}