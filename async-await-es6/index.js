const takeAChance = require('./take-a-chance');

async function asyncCall() {
  const result = await takeAChance('adnan');
  console.log(result);
}
asyncCall();
