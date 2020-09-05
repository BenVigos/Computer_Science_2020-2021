# Test Three:
### What's new:
* Tried to make a ckeck_input function, failed
* Alligned the text


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
