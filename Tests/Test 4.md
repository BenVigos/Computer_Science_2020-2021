# Test four:
### What's new?
* Program now works with text file!!!
* Made the code shorter by using PyInputPlus
```
from datetime import datetime
import pyinputplus as pyinp


def new_topic():
    print("""
      ===================
      """)

all_lines=open("store data.txt","r").readlines()
items = all_lines[0].strip().split(",")
prices = all_lines[1].strip().split(",")
inventory = (all_lines[2].strip().split(","))

if not len(items)==len(prices)==len(inventory):
    new_topic()
    print("Something in the store data is wrong. Fix it and try again.")
    exit()

for i in range(len(prices)):
    prices[i] = int(prices[i])
    inventory[i] = int(inventory[i])

date = datetime.today()


name = input("Hello, what is your name? ")
new_topic()
y = len(items)

print("Welcome to Mr Sakamoto's store {}".format(name))
#print("The time is: {}".format(date))

print("Today's deals:")
for i in range (len(items)):
    n = str(i+1)
    print(n+".",items[i],"{} Bitcoin".rjust(25-len(items[i])).format(prices[i]),
          "({} available)".format(inventory[i]).rjust(26-(len(str(prices[i]))+len("  Bitcoin"))))
new_topic()

option=pyinp.inputInt("select an option 1-{}: ".format(len(items)),min=1,max=len(items))
for i in range (len(items)):
    if option==str(i+1):
        print("You selected option {}: {}. This item costs {} Bitcoin".format(i+1,items[i],prices[i]))

new_topic()


amount = pyinp.inputInt("How many do you want (max is {})? ".format(inventory[int(option)-1]),
                        max=inventory[int(option)-1])
new_topic()

print("It will cost {} Bitcoin".format(prices[int(option)-1] * int(amount)))

proceed = pyinp.inputYesNo("Would you like to proceed?")
if proceed=="yes":
    new_topic()
    print("cool")
else:
    new_topic()
    print("Aww :'(")
```
