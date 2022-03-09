import axios from 'axios';

axios.get('https://pokeapi.co/api/v2/pokemon/cubone')
  .then(result => {
    console.log(result);
  });
