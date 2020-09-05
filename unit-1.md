# Unit-1 a electronic hardware store

## Criteria A: Planning

### Context of the problem:
There is a 1,000 y.o. hardware store in Karuizawa, run by Mr Sakamoto. The owner wants to update his accounting software. At the moment everything is kept on paper. He would like to have a software application to replace his accounting book. Mr Sakamoto just got a new macbook.

### Justification of the solution:
**Here we will write the design statement: How, where, why**

## Development:
(only major updates are recorded here, to find more tests go to the folder called "tests")

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
  ```
### Second test:
* Continued the program to the point where a payment would be made
* Tried to automate some of the processes.
* Reduced the length of the code by getting rid of repetitions
* tried to make a check_input function. Failed


```
from datetime import datetime

def new_topic():
    print("""
      ===================
      """)

#def check_input(question,num,answer_pos,answer_neg):
#   x = 1
#    while x == 1:
#        inp = input(question)
#        print(inp)
#        for i in range(num):
#            if inp==str(i):
#                print(i)
#                print(inp)
#                print(answer_pos)
#                x += 1
#                break
#        if x == 1:
#            print(inp)
#            print(answer_neg)

date = datetime.today()
items=["RAM","CPU","Motherboard","GPU","test","your mom"]
prices=[1,4,5,15,60,5]
inventory=[10,20,40,18,23,1]
n_items=len(items)

name = input("Hello, what is your name? ")
new_topic()
y=len(items)

print("Welcome to Mr Sakamoto's store {}".format(name))
#print("The time is: {}".format(date))

print("Today's deals:")
for i in range (len(items)):
    n=str(i+1)
    print(n+".",items[i],"{} Bitcoin".rjust(25-len(items[i])).format(prices[i]),"({} available)".format(inventory[i]).rjust(26-(len(str(prices[i]))+len("  Bitcoin"))))
new_topic()

#check_input("select an option 1-{}: ".format(n_items),n_items,"You selected option {}: {}. This item costs {} Bitcoin".format(i + 1, items[i], prices[i]),"The item number {} does not exist".format(inp))


x=1
while x==1:
    option=input("select an option 1-{}: ".format(len(items)))
    for i in range (len(items)):
        if option==str(i+1):
            print("You selected option {}: {}. This item costs {} Bitcoin".format(i+1,items[i],prices[i]))
            x+=1
    if x==1:
        print("The item number {} does not exist".format(option))
new_topic()

x=1
while x==1:
    amount=input("How many do you want (max is {})? ".format(inventory[int(option)-1]))
    for i in range(inventory[int(option)-1]):
        if amount==str(i+1):
            x+=1
    if x==1:
        print("Invalid input. Enter a number within the given range.")
new_topic()

print("It will cost {} Bitcoin".format(prices[int(option)-1] * int(amount)))

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
