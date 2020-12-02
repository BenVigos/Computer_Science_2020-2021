# December 2nd

### Part 1

```.py
import math

file = open("input.txt", "r").readlines()
inp = open("input.txt", "r")
tot=0

for x, line in enumerate(inp):
    str = line.strip()
    m= int(str[0]+str[1] if str[1].isdigit()==True else str[0])
    M= int(str[2]+str[3] if m-10<0 else str[3]+str[4])
    c= ( str[4] if m-10<0 and M-10<0 else str[6] if m-10>=0 and M-10>=0 else str[5])
    print("min: ", m)
    print("max: ", M)
    print("char: ", c)

    if str.count(c)-1>=m and str.count(c)-1<=int(M):
        tot+=1

print("total: ", tot)
```


### Part 2

```.py
import math

file = open("input.txt", "r").readlines()
inp = open("input.txt", "r")
tot=0
it=0

for x, line in enumerate(inp):
    str = line.strip()
    p1= int(str[0]+str[1] if str[1].isdigit()==True else str[0])
    p2= int(str[2]+str[3] if p1-10<0 else str[3]+str[4])
    c= ( str[4] if p1-10<0 and p2-10<0 else str[6] if p1-10>=0 and p2-10>=0 else str[5])
    d = 4

    if p1 - 10 < 0:
        d += 1

    else:
        d += 2

    if p2 - 10 < 0:
        d += 1

    else:
        d += 2

    print("pos1: ", p1)
    print("pos2: ", p2)
    print("char: ", c)
    print(str)
    print(str[p1 + d])
    print(str[p2 + d])


    if str[p1+d]==c and str[p2+d]!=c or str[p1+d]!=c and str[p2+d]==c:
        tot+=1

    print("it: ", it)
    print(" ")
    it += 1

print("total: ", tot)
```
