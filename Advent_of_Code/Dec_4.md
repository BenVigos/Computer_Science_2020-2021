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


### Part 2 (was wrong by 1)
```.py
import math

inp = open("input.txt", "r").readlines()
passports = [""]
types = ["byr","iyr","eyr","hgt","hcl","ecl","pid","cid"]
n = 0
stage_1 = []
tot = 0
banned = "g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"
eyes = "amb, blu, brn, gry, grn, hzl, oth"

for line in inp:
    passports[n]+=line

    if line[0]=='\n':
        passports.append("")
        n+=1
print(len(passports))
valid = 0

for psp in range(len(passports)):
    #passports[psp] = passports[psp].strip('\n').replace("\n", " "). split(" ")
    data = 0
    #print(passports[psp])

    for inf in range(len(types)):
        if types[inf] in passports[psp]:
            data+=1
    #print("data: ", data)
    if data<7 or data==7 and "cid:" in passports[psp]:
        print("not valid")

    else:
        #print("stage 1")
        valid+=1
        stage_1.append(passports[psp])
    #print(" ")
    #print("------next line------")
    #print(" ")

for i in range(len(stage_1)):
    stage_1[i]=stage_1[i].strip('\n').replace("\n", " "). split(" ")




def check(type, item, z):
    tr = 0
    #print(item, type)
    if type==0 and int(item)>=1920 and int(item)<=2002:
        return True

    if type==1 and int(item)>=2010 and int(item)<=2020:
        return True

    if type==2 and int(item)>=2020 and int(item)<=2030:
        return True

    if type==3:
        if "cm" in item:
            item = item.strip("cm")
            if int(item)>=150 or int(item)<=193:
                return True

        if "in" in item:
            item = item.strip("in")
            if int(item)>=59 or int(item)<=76:
                return True

    if type==4 and "#" in item and len(item)==7:
        for i in range(len(item)):
            if banned[i] in item:
                tr+=1
        if tr==0:
            return True
        tr==0

    if type==5 and item in eyes:
            return True

    if type==6 and len(item)==9:
        return True

    if type==7:
        return True




for z, passport in enumerate(stage_1):
    truths=0
    for item in passport:
        for i in range(len(types)):
            if types[i] in item:
                item = item.strip(types[i]+":")
                if check(i, item, z)==True:

                    #print(types[i],item,"is true")
                    #print("")
                    truths+=1
                else:
                    print("z :", z, types[i], item, "is false")
                    print("")
    print("")
    if truths==len(passport):
        tot+=1
        #print("valid")

    else:
        print(passport, z, "is invalid")

    print("truths: ", truths)
    print("")





print(stage_1)
print(len(stage_1))
print("total: ", tot)
print("reg: ", reg)

```
