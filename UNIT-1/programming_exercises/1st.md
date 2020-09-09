# This is the first programming exercise  

### Create a program that asks the user for 10 numbers and then shows those values ordered from smallest to largest.

```.py
n=[]
pos=[0,0,0,0,0,0,0,0,0,0]

while len(n)<10:
    inp=input("{}. Enter a number: ".format(len(n)+1))
    try:
        n.append(int(inp))
    except:
        print("That was not a number")

for i in range(10):
    for x in range(10):
        if int(n[i])>int(n[x]):
            pos[i]+=1

for y in range(10):
    for z in range(10):
        if pos[z]==y:
            print(n[z])
 ```
