const takeAChance = require('./take-a-chance');

async function asyncCall() {
  try {
    const result = await takeAChance('adnan');
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}
asyncCall();
