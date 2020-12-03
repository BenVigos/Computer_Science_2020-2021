# December 3rd

## Input
https://adventofcode.com/2020/day/3/input 

### Part 1

```.py
import math

inp = open("input.txt", "r")
trees=0
displacement=0

for i, line in enumerate(inp):
    route = line.strip()

    print(i, " ", route)
    print(displacement)
    print(displacement % len(route))

    if route[displacement%(len(route))]=="#":
        trees+=1
        print("tree")

    print(" ")

    displacement+=3

print("total trees: ", trees)
```


### Part 2

```.py
import math

inp = open("input.txt", "r").readlines()
trees = [0, 0, 0, 0, 0]
displacement = [1, 3, 5, 7, 1]
down = [1, 1, 1, 1, 2]
tot = 1

for x in range(5):
    d = 0
    print("")
    print("-----------")
    print("X=",x)
    print("-----------")
    print("")

    for i, line in enumerate(inp):
        print("i: ", i)

        if i%down[x]==0:

            route = line.strip()

            print(i, " ", route)
            print("d: ", d)
            print("pos: ", d % len(route))

            if route[d%(len(route))]=="#":
                trees[x]+=1
                print("tree")

            print(" ")

            d+=displacement[x]

    tot=tot*trees[x]


print("total trees: ", trees)
print(tot)
```
