# Test One:
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
