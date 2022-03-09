const axios = require('axios').default;

axios.get('https://pokeapi.co/api/v2/pokemon/cubone')
  .then(result => {
    // eslint-disable-next-line no-console
    console.log('result:', result);
  });
