# December 4th

##Input
https://adventofcode.com/2020/day/4/input 

### Part 1

```.py
import math

inp = open("input.txt", "r").readlines()
passports = [""]
types = ["byr","iyr","eyr","hgt","hcl","ecl","pid","cid"]
n = 0

for line in inp:
    passports[n]+=line

    if line[0]=='\n':
        passports.append("")
        n+=1

valid = 0

for psp in range(len(passports)):
    data = 0
    print(passports[psp])
    for inf in range(len(types)):
        if types[inf] in passports[psp]:
            data+=1
    print("data: ", data)
    if data<7 or data==7 and "cid:" in passports[psp]:
        print("not valid")

    else:
        print("valid")
        valid+=1
    print(" ")
    print("------next line------")
    print(" ")

print("valid: ",valid)
```


### Part 2
```.py
