const getUnique = (arr, comp) => {
  const unique = arr
    //store the comparison values in array
    .map(e => e[comp])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e])

    .map(e => arr[e]);

  return unique;
}

export default getUnique;