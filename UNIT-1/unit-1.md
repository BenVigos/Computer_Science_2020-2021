# Unit-1 a electronic hardware store

## Criteria A: Planning

### Context of the problem:
There is a 1,000 y.o. hardware store in Karuizawa, run by Mr Sakamoto. The owner wants to update his accounting software. At the moment everything is kept on paper. He would like to have a software application to replace his accounting book. Mr Sakamoto just got a new macbook.

### Justification of the solution:
We want to create a text based application for a computer, which provides the functionality for the hardware store. It will have an inventory of the items and their stock, which can be edited, a record of all the purchases, it will be able to categorize the items and calculate their price. We will develop this application in python because it's the language we're learning right now, 
in class right now. In comparison to a lot of other programming languages (C+, etc), python has very simple syntax. It also has a large library of standards and toolkits that we can use to our advantage In addition, python is the most popular programming language, with programmers who write in python having the heighest anual salary out of all programmers[1].

### T.E.L.O.S. (Technical, Economic, Legal, Operational, Scheduling) Study:
[1] Eastwood, Brian. “The 10 Most Popular Programming Languages to Learn in 2020.” Northeastern University Graduate Programs, 27 Aug. 2020, www.northeastern.edu/graduate/blog/most-popular-programming-languages/. 

### Criteria for Success:
* Provides clear feedback to the user
* (There are no bugs)
* The program is secure, needs username and password to login 

## Criteria B: Planning
### Diagram
![Diagram](photos%20and%20stuff/20200912_190122.jpg)

### Flow chart
![flow chart](photos%20and%20stuff/Screenshot%202020-09-11%20at%206.52.05%20PM.png)

## Criteria C: Development
(only major updates are recorded here, to find more tests go to the folder called "tests")

### First test for a text based store:
```.py
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
* Continued the program to the point where a payment would be made.
* Added lists so items can easily be added and removed.
* Automated some of the processes.
* Tried to make it fool proof. No input can break it.
* Reduced the length of the code by getting rid of repetitions.
* Can read text file!
* Implemented taxes


```.py
from datetime import datetime

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

x=0
while x==0:
    option=input("select an option 1-{}: ".format(len(items)))
    for i in range (len(items)):
        if option==str(i+1):
            print("You selected option {}: {}. This item costs {} Bitcoin".format(i+1,items[i],prices[i]))
            x+=1
    if x==0:
        print("Invalid input. Enter a number within the given range.")
        new_topic()

new_topic()



x=0
while x==0:
    amount=input("How many do you want (max is {})? ".format(inventory[int(option)-1]))
    for i in range(inventory[int(option)-1]):
        if amount==str(i+1):
            cost = prices[int(option)-1] * int(amount)
            x+=1
    if x==0:
        print("Invalid input. Enter a number within the given range.")
new_topic()

for i in range(5):
    if cost/(i+1)<=250*(i+1):
        tax=0.25-(0.05*i)
        total_cost = cost+cost*tax
        tax_cost = round(float(total_cost-cost),1)

print("x"*(38+len(str(total_cost)+str(tax_cost))))
print("x It will cost {} Bitcoin. The tax is {} x".format(total_cost,tax_cost))
print("x"*(38+len(str(total_cost)+str(tax_cost))))
new_topic()


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


### Simulation of a dice:

```.py
import random, math, matplotlib.pyplot as plt

#simulation of a fare dice
#You can play arround with these values.


min=100
max=10000
steps=1000


#DON'T TOUCH ANYTHING BELOW THIS IF YOU'RE NOT ME
reps = []
av_err = []
ps=0

for it in range(min, max+1, round(10001/steps)):

    n = 0
    nums=[0,0,0,0,0,0]
    error=[0,0,0,0,0,0]
    reps.append(it)

    for i in range(it):
        n = random.randint(0, 59) / 10
        nums[math.ceil(n)-1] += 1

    for z in range(6):
        error[z]= round(nums[z]-it/6)
        #print("""Number of {}s rolled: {} out of expected {}
        #            The error is: {}
        #            %error is:{}
        #        """.format(z+1, nums[z], round(it/6), error[z], abs(error[z]/nums[z])))

    av_err.append(math.sqrt(sum([ x**2 for x in error])/6))
    ps+=1

print("The simulation is done. Look right for results")

plt.plot(reps, av_err, "ro")
plt.plot(reps, av_err)
plt.ylabel("average error")
plt.xlabel("number of dice thrown")
plt.show()
```
