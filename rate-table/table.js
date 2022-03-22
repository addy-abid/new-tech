// const str = '5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;';

// var strArr = str.split(';').map(eachArr => eachArr.split(':'));
// var lockDays = [];
// var ratesArr = [];
// var pricesArr = [];
// strArr.map(eachArr => {
//   lockDays.push(eachArr.pop().replace('L', ''));
//   return eachArr;
// });

// strArr.pop();
// lockDays.pop();

// ratesArr = strArr.map(eachArr => eachArr.map(rates => rates.split(',').filter((rates, i) => !(i % 2)))[0]);
// pricesArr = strArr.map(eachArr => eachArr.map(pricea => pricea.split(',').filter((prices, i) => (i % 2)))[0]);

// var arr = pricesArr[0].map((prices, i) => pricesArr.map(eachPrice => eachPrice[i]));
// arr.forEach((price, i) => price.unshift(ratesArr[0][i]));
// lockDays.unshift('');
// var table = document.createElement('table');
// var tr = document.createElement('tr');
// table.appendChild(tr);
// lockDays.forEach(header => {
//   var td = document.createElement('td');
//   td.textContent = header;
//   tr.appendChild(td);
// });
// arr.forEach(data => {
//   var tr2 = document.createElement('tr');
//   table.appendChild(tr2);
//   data.forEach(singleData => {
//     var td2 = document.createElement('td');
//     td2.textContent = singleData;
//     tr2.appendChild(td2);
//   });
// });

// document.getElementById('root').appendChild(table);

// console.log(table);
