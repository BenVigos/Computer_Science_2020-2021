# Test Two:

### What's new?
* Tried to automate some of the processes, reduce the length of the code and make it look nicer


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
