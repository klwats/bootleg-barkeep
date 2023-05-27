const fetchRandom = (): Promise<any> => {
  return fetch(`https:www.thecocktaildb.com/api/json/v1/1/random.php`)
  .then(res => {
    if(!res.ok){
      throw new Error(`Please try again there is an error. code: ${res.status}`)
    } else {
      return res.json()
    };
  });
};

export { fetchRandom }