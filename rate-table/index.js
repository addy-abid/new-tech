// const str = '5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;5.0,99,5.5,100,6.0,101:L20;5.0,99,5.5,100,6.0,101:L20;';

// var strArr = str.split(';').map(list => list.split(':'));

// // splitting string by semi-colon into array and splitting up each index in array by semicolon seprating the "L10"

// var lockDays = [];
// var ratesArray = [];
// var pricesArray = [];
// var orderedPricesArray = [];

// // create storage

// strArr.map(eachArray => {
//   // iterate over each array in strArray
//   lockDays.push(eachArray.pop().replace('L', ''));
//   // remove lock days and L from each array and push into storage
//   return eachArray;
// });

// strArr.pop();
// lockDays.pop();
// // remove empty string from end of lock day array

// ratesArray = strArr.map(eachArray => eachArray.map(rates => rates.split(',').filter((rate, i) => !(i % 2)))[0]);
// // iterate over strarray and each array inside to grab all rates - by checking if index is not divisible by 2
// pricesArray = strArr.map(list => list.map(prices => prices.split(',').filter((price, i) => (i % 2)))[0]);
// // iterate over strarray and each array inside to grab all prices - by checking if index is  divisible by 2

// orderedPricesArray = pricesArray[0].map((price, i) => pricesArray.map(singlPrice => singlPrice[i]));
// console.log(orderedPricesArray);
// orderedPricesArray.forEach((price, i) => price.unshift(ratesArray[0][i]));

// lockDays.unshift('');

// var table = document.createElement('table');

// var tr = document.createElement('tr');
// table.appendChild(tr);
// lockDays.forEach(header => {
//   var td = document.createElement('td');
//   td.textContent = header;
//   tr.appendChild(td);
// });

// orderedPricesArray.forEach(data => {
//   var tr2 = document.createElement('tr');
//   table.appendChild(tr2);
//   data.forEach(singleDataEl => {
//     var td2 = document.createElement('td');
//     td2.textContent = singleDataEl;
//     tr2.appendChild(td2);
//   });
// });

// document.getElementById('root').appendChild(table);
