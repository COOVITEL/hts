#!/usr/bin/python3

import sys

date = sys.stdin
sum = 0
for argv in date:
    dates = argv.split(" ")
    if len(dates) != 9:
        continue
    if dates[-2] != "500":
        print(f"{dates[-2]}: {dates[-1][0]}")
        size = dates[-1].replace("\n", "")
        sum += int(size)
    else:
        print(f"File size: {sum}")
        sum = 0

