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
const strRatess = '5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;5.0,98,5.5,99,6.0,100:L30;5.0,97,5.5,98,6.0,99:L40;';

var strArr = strRatess.split(';');

var header = [];
var rowHeader = [];
var rowValues = [];
var rows = [];

for (let i = 0; i < strArr.length; i++) {
  var data = strArr[i].split(':L');
  if (data.length > 1) {
    header.push(data[1]);
  }
  rows.push(data[0]);
}
rows.pop();

if (rows.length > 0) {
  var firstRow = rows[0].split(',');
  for (let i = 0; i < firstRow.length; i += 2) {
    rowHeader.push(firstRow[i]);
  }
  for (let k = 0; k < rows.length; k++) {
    var col = [];
    rows[k] = rows[k].split(',');
    for (let j = 1; j < rows[k].length; j += 2) {
      col.push(rows[k][j]);
    }
    rowValues.push(col);
  }
}

var matrix = [];
var padding = [''];

if (padding.length > 0) {
  header = padding.concat(header);
  matrix.push(header);
}

for (let i = 0; i < rowHeader.length; i++) {
  matrix.push([rowHeader[i]]);
}

for (let i = 0; i < rowValues.length; i++) {
  for (let j = 0; j < rowValues[i].length; j++) {

    matrix[j + 1].push(rowValues[i][j]);
  }
}
