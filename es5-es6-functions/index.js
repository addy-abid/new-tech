function convertMinutesToSeconds(minutes) {
  const seconds = 60;
  return minutes * seconds;
}

const convertMinutesToSecondsES6 = minutes => {
  const seconds = 60;
  return minutes * seconds;
};

const convertMinutesToSecondsResultES5 = convertMinutesToSeconds(5);
const convertMinutesToSecondsResultES6 = convertMinutesToSecondsES6(5);

console.log('seconds to minutes es5:', convertMinutesToSecondsResultES5);
console.log('seconds to minutes es6:', convertMinutesToSecondsResultES6);

function greet(name) {
  return 'Hey, ' + name;
}

const greetES6 = name => {
  return `Hey, ${name}`;
};

const greetMe = greet('Adnan');
const greetMeES6 = greetES6('Adnan');

console.log('greet me es5:', greetMe);
console.log('greet me es6:', greetMeES6);

function getArea(width, height) {
  return width * height;
}

const getAreaES6 = (width, height) => {
  return width * height;
};

const area = getArea(17, 42);
const areaES6 = getAreaES6(17, 42);

console.log('area es5:', area);
console.log('area es6:', areaES6);

function getFirstName(person) {
  const firstName = person.firstName;
  return firstName;
}

const getFirstNameES6 = person => {
  return person.firstName;
};

console.log('firstname es5:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log('firstname es6:', getFirstNameES6({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  const lastElement = array[array.length - 1];
  return lastElement;
}

const getLastElementES6 = array => {
  const lastElement = array[array.length - 1];
  return lastElement;
};
console.log('last element es5:', getLastElement(['propane', 'and', 'propane', 'accessories']));
console.log('last element es6:', getLastElementES6(['propane', 'and', 'propane', 'accessories']));
