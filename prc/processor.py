#!/usr/bin/python3
import csv
import sys
from re import search, sub

# open csv file
with open(str(sys.argv[1])) as csvfile:
	# start csv reader
	reader = csv.reader(csvfile, delimiter=",", quotechar='"')

	# create new csv file
	newfile = open(f"processed.{str(sys.argv[1])}", "w", newline='')

	# loop over all rows in csv file
	i = 0
	for row in reader:
		if i > 0:
			# split row into variable names
			(accNum, refChk, debit, credit, bal, date, desc) = row

			# delete acc numbers
			row[0] = None

			# remove whitespace from description field
			desc = " ".join(desc.split())

			# replace possible acc numbers
			reg = "\d{9,10}"
			desc = sub(reg, "XXXX", desc)

			# update data in row
			row[6] = desc

			# Bank CSV format => MySQL DATE data type format
			# MM/DD/YYYY => YYYY-MM-DD

			# split date into variable names
			(m, d, y) = date.split("/")
			if len(m) == 1:
				m = "0" + m
			if len(d) == 1:
				d = "0" + d
			# create new date string
			date = y + "-" + m + "-" + d
			# update data in row
			row[5] = date

		# write row to new csv file
		writer = csv.writer(newfile, delimiter=",", quotechar='"', quoting=csv.QUOTE_MINIMAL)
		writer.writerow(row[1:])

		i += 1

	# close new file and print message
	newfile.close()
	print("write complete.")
