# Unit-1 a electronic hardware store

## Criteria A: Planning

### Context of the problem:
There is a 1,000 y.o. hardware store in Karuizawa, run by Mr Sakamoto. The owner wants to update his accounting software. At the moment everything is kept on paper. He would like to have a software application to replace his accounting book. Mr Sakamoto just got a new macbook.

### Justification of the solution:
**Here we will write the design statement: How, where, why**

## Development:

### First test for a text based store:
```
from datetime import datetime
date=datetime.today()
name=input("Hello, what is your name? ")
print("Welcome to Mr Sakamoto's store {}".format(name))
#print("The time is: {}".format(date))
print("""
Today's deals:
1. RAM  1 Bitcoin
2. CPU  4 Bitcoin
3. Motherboard 5 Bitcoin
4. GPU  15 Bitcoin
===========================
"""
)

while True:
  option=input("select an option 1-4: ")

  if option=="1":
    price=1
    print("You selected option 1: RAM. This item costs {} Bitcoin".format(price))
    break

  elif option=="2":
    price=4
    print("You selected option 2: CPU. This item costs {} Bitcoin".format(price))
    break

  elif option=="3":
    price=5
    print("You selected option 3: Motherboard. This item costs {} Bitcoin".format(price))
    break

  elif option=="4":
    price=15
    print("You selected option 4: GPU. This item costs {} Bitcoin".format(price))
    break

  else:
    print("The item number {} does not exist".format(option))
  
amount=int(input("How many do you want? "))
print("It will cost {} Bitcoin".format(price*amount))

while True:
  proceed=input("Would you like to proceed? Yes or No: ")

  if proceed=="Yes":
    print("cool")
    break
  elif proceed=="No":
    print("Aww :'(")
    break
  else:
    print("Invalid input. Type 'Yes' or 'No'")
  ```
### Second test:
Tried to automate some of the processes, reduce the length of the code and make it look nicer

```
from datetime import datetime

def new_topic():
    print("""
      ===================
      """)

date = datetime.today()
items=["RAM","CPU","Motherboard","GPU"]
prices=[1,4,5,15]
name = input("Hello, what is your name? ")
new_topic()

print("Welcome to Mr Sakamoto's store {}".format(name))
#print("The time is: {}".format(date))

print("Today's deals:")
for i in range (4):
    n=str(i+1)
    print(n+".",items[i],"{} Bitcoin".rjust(12).format(prices[i]))
new_topic()

x=1
while x==1:
    option=input("select an option 1-4: ")
    for i in range (4):
        if option==str(i+1):
            print("You selected option {}: {}. This ite, costs {} Bitcoin".format(i+1,items[i],prices[i]))
            x+=1
    if x==1:
        print("The item number {} does not exist".format(option))
new_topic()

amount = int(input("How many do you want? "))
new_topic()

print("It will cost {} Bitcoin".format(prices[int(option)-1] * amount))

while True:
    proceed = input("Would you like to proceed? Yes or No: ")

    if proceed == "Yes":
        new_topic()
        print("cool")
        break
    elif proceed == "No":
        new_topic()
        print("Aww :'(")
        break
    else:
        new_topic()
        print("Invalid input. Type 'Yes' or 'No'")
```
