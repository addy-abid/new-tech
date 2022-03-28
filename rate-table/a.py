strRates = "5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;"

init = strRates.split(";") # list number of headers there are
header = []
rowHeader= []
rowValues = []

# temp rows
rows = []
for el in init:
	data = el.split(":L")
	if len(data) > 1:
		header.append(data[1])
	rows.append(data[0])

rows.pop() # remove empty

if len(rows) > 0:
	firstRow = rows[0].split(",")
	for value in firstRow[::2]: # skip every other value
		rowHeader.append(value)

	for row in rows:
		col = []
		row = row.split(",")
		for value in row[1::2]:
			col.append(value)
		rowValues.append(col)

matrix = []
padding = []
for i in range(len(rowValues) - len(header)): # for length of a row - header
	padding.append("")

if len(padding) > 0:
	header = padding.extend(header) # combined [[""]]] with [["10", "20"]] -> [["", "10", "20"]]
matrix.append(header)

for i,value in enumerate(rowHeader):  # loop through values and keep an index, i
	column = [value]
	matrix.append([value])

for row in rowValues:
	for i,value in enumerate(row):
		matrix[i+1].append(value)

print(matrix)
