const strRates = '5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;5.0,98,5.5,99,6.0,100:L30;5.0,97,5.5,98,6.0,99:L40;';

var strArr = strRates.split(';');

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
// eslint-disable-next-line no-console

// Loop through the rowValues
// Get the value at rowValues[i](value is another array here)
// Then loop through value and append to matrix
// j = 0
// For j < len(value)
// matrix[i + 1].append(rowValues[i][j])
