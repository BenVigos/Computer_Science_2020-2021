# December 1st

## Day 1 input
https://adventofcode.com/2020/day/1/input

### Part 1

```.py
import math

inp = open("input.txt", "r").readlines()

for i in range(len(inp)):
    inp[i]=int(inp[i])

for i in range(len(inp)):
    for x in range(len(inp)):
        if inp[i]+inp[x]==2020:
            print(inp[i]*inp[x])
            exit()
```               


### Part 2

```.py
import math

inp = open("input.txt", "r").readlines()

for i in range(len(inp)):
    inp[i]=int(inp[i])

for i in range(len(inp)):
    for x in range(len(inp)):
        for z in range(len(inp)):

            if inp[i]+inp[x]+inp[z]==2020:
                print(inp[i]*inp[x]*inp[z])
                exit()
```    
