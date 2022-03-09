fetch('https://pokeapi.co/api/v2/pokemon/cubone')
  .then(res => res.json())
  .then(poke => {
    console.log(poke);
  });
