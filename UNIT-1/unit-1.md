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

## Criteria B: Design

### System Diagram
![Diagram](photos%20and%20stuff/20200912_190122.jpg)

### Flow chart
![flow chart](photos%20and%20stuff/Screenshot%202020-09-11%20at%206.52.05%20PM.png)

### Record of tasks
| Task No. |                                Planned action                                |           Planned Outcome          | Time Estimated | Target completion date | Criteria |
|:--------:|:----------------------------------------------------------------------------:|:----------------------------------:|:--------------:|:----------------------:|:--------:|
|     1    | Planning: Discussed the context of the situation (1st interview with client) | Write the contexts of the problem. |     15 min     |        3/9/2020        |     A    |
|     2    |         Development: Coded a first prototype of our text-based store         |          A working program         |     180 min    |        10/9/2020       |     C    |
|     3    |    Design: Create a flow diagram of one of the algorithms used in our code   |  Flow diagram explaining algorithm |     30 min     |        11/9/2020       |     B    |

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
* More!


```.py
#This is my electronics hardware store! (use username:ben and password:p4ssw0rd)
import library as lib

#Login check
x=0
while x==0:
    usrname = input("Hello, what is your username? ")
    pswd = input("What is your password? ")
    if usrname=="ben" and pswd=="p4ssw0rd":
        x+=1
    else:
        print("Invalid information, please try again.")
        lib.new_topic()

decrypted_list, items, prices, inventory = lib.decryptor(pswd)

lib.new_topic()

#Checks if the number of items matches up with the number of prices and inventory
if not len(items)==len(prices)==len(inventory):
    lib.new_topic()
    print("Something in the store data is wrong. Fix it and try again.")
    exit()

#Prints the menu.
print("Welcome to Mr Sakamoto's store {}".format(usrname))
print("Today's deals:")
for i in range (len(items)):
    n = str(i+1)
    print(n+".",items[i],"{} Bitcoin".rjust(25-len(items[i])).format(prices[i]),
          "({} available)".format(inventory[i]).rjust(26-(len(str(prices[i]))+len("  Bitcoin"))))
lib.new_topic()

#Checks if the input is valid
x=0
while x==0:
    option=input("select an option 1-{}: ".format(len(items)))
    for i in range (len(items)):
        if option==str(i+1):
            print("You selectlib option {}: {}. This item costs {} Bitcoin".format(i+1,items[i],prices[i]))
            x+=1
    if x==0:
        print("Invalid input. Enter a number within the given range.")
        lib.new_topic()

lib.new_topic()

#Checks if the input is valid
x=0
while x==0:
    amount=input("How many do you want (max is {})? ".format(inventory[int(option)-1]))
    for i in range(inventory[int(option)-1]):
        if amount==str(i+1):
            cost = prices[int(option)-1] * int(amount)
            x+=1
    if x==0:
        print("Invalid input. Enter a number within the given range.")
lib.new_topic()

#Calculates the tax
for i in range(5):
    if cost/(i+1)<=250*(i+1):
        tax=0.25-(0.05*i)
        total_cost = cost+cost*tax
        tax_cost = round(float(total_cost-cost),1)

#Prints price box
print("x"*(38+len(str(total_cost)+str(tax_cost))))
print("x It will cost {} Bitcoin. The tax is {} x".format(total_cost,tax_cost))
print("x"*(38+len(str(total_cost)+str(tax_cost))))
lib.new_topic()

#Purchase confirmation and validation check
while True:
    proceed = input("Would you like to proceed? Yes or No: ")

    if proceed == "Yes" or "yes" or "Y" or"y":
        lib.new_topic()
        print("cool")
        #inventory[int(option)-1]=inventory[int(option)-1]-int(amount)
        break
    elif proceed == "No" or "no" or "N" or "n":
        lib.new_topic()
        print("Aww :'(")
        break
    else:
        lib.new_topic()
        print("Invalid input. Type 'Yes','yes','Y','y' or 'No','no','N','n'")

#lib.encryptor(items, prices, inventory)
```


### Simulation of a dice:

```.py
import random, math, matplotlib.pyplot as plt

#simulation of a fare dice
#You can play arround with these values.


min=100
max=10000
steps=1000
plot="err" # "per" or "err"

#DON'T TOUCH ANYTHING BELOW THIS IF YOU'RE NOT ME
reps = []
av_err = []
av_per_err = []
ps=0

for it in range(min, max+10, round((max+10)/steps)):
    print(ps)
    n = 0
    nums=[0,0,0,0,0,0]
    error=[0,0,0,0,0,0]
    per_error=[0,0,0,0,0,0]

    reps.append(it)

    for i in range(it):
        n = random.randint(0, 59) / 10
        nums[math.ceil(n)-1] += 1

    for z in range(6):
        error[z] = round(nums[z]-it/6)
        per_error[z] = abs((error[z]/nums[z]))
        #print("""Number of {}s rolled: {} out of expected {}
        #            The error is: {}
        #            %error is:{}
        #        """.format(z+1, nums[z], round(it/6), error[z], abs(error[z]/nums[z])))

    #var 1?
    av_err.append(sum([ abs(x) for x in error])/(6*it))

    #var 2?
    #av_err.append(math.sqrt(2 ** sum([x for x in error])) / (6 * it))

    av_per_err.append(sum([ x for x in per_error])/(6*it))

    ps+=1

print("The simulation is done. Look right for results")

plt.xlabel("number of dice thrown")
if plot=="err":
    plt.plot(reps, av_err, "ro")
    plt.plot(reps, av_err)
    plt.ylabel("absolute value of average error")

else:
    plt.plot(reps, av_per_err, "ro")
    plt.plot(reps, av_per_err)
    plt.ylabel("absolute value of average percentage error")

plt.show()
```

### Computer architecture:

![Computer architecture](photos%20and%20stuff/Computer%20architecture.jpg)

We tried to draw the architecture of a computer and this is an explenation of the incredible abstract art featured above. On the top left of the box we have our DDR4 compatible motherboard, featuring 32GM of DDR4 RAM, a core i9 latest-gen cpu and a GTX1080 GPU. We can see that our motherboard has a PCH, a ROM/CMOS chip, a BUS slots and PCI express slots (Where the GPU is connected). It also has all the required ports (USB, HDMI, DP, Ethernet, etc) to connect all our inputs seen on the left of the diagram. On the bottom left of the box we have our 600W 80+ bronze power supply ("80+ bronze" reffers to its efficiency), which can output +- 12, 5 or 3.3 Volts and is connected to the motherboard with PSU cables. On the left of the motherboard we have a 256GB SSD and a 2TB HDD which are connected to the motherboard through SATA cables. Below the SSD we can see that the maker of this computer did a poor job at cable managemnet. Finally, on the right side of the box we have our various output devices, most notably our display which is connected to the computer through the display port (DP). All around the we can see some drawings and depictions of various components and devices.

### Securing the database:
I made a basic encryptor for my store's database

![Encryptor Flow-Chart](photos%20and%20stuff/Encryptor_flow-chart.png)

```.py
#This program encrypts and decrypts the store data

def encryptor(items, prices, inventory):
    msg = ["","","","","","",""]
    encr_msg = ["","","","","","",""]
    key = [int(ord(char)/10) for char in "p4ssw0rd"]
    encr_lines= open("encrypted store data.txt", "w")

    #Puts the elements in the format "item,price,inventory"
    for i in range(len(items)):
        msg[i] = items[i]+","+str(prices[i])+","+str(inventory[i])

    #Encrypts the elements
    for n,line in enumerate(msg):
        for x, elem in enumerate(line):
            encr_msg[n] += chr(ord(elem)+key[x%8])

    #Puts the encrypted elements in the file
    for elem in encr_msg:
        encr_lines.write(elem+"\n")






def decryptor(key):
    decrypted_list = ["","","","","","",""]
    final_dec_list = []
    shift = [int(ord(char)/10) for char in key]

    #all_lines = open("store data.txt", "r").readlines()
    encr_lines = open("encrypted store data.txt", "r").readlines()

    # Strips the lines from \n
    for i in range(len(decrypted_list)):
        encr_lines[i] = encr_lines[i].strip()

    for n,line in enumerate(encr_lines):
        for x, elem in enumerate(line):
            decrypted_list[n] += chr(ord(elem) - shift[x%8])

    decrypted_list = [decrypted_list[n] + "," for n in range(len(decrypted_list)) ]
    decrypted_list[len(decrypted_list)-1] = decrypted_list[len(decrypted_list)-1].rstrip(",")
    decrypted_list = "".join(decrypted_list)
    decrypted_list = decrypted_list.split(",")

    items = [decrypted_list[n] for n in range(len(decrypted_list)) if n%3==0]
    prices = [int(decrypted_list[n]) for n in range(len(decrypted_list)) if n%3==1]
    inventory = [int(decrypted_list[n]) for n in range(len(decrypted_list)) if n%3==2]
    decrypted_list = items+prices+inventory

    return decrypted_list, items, prices, inventory
```

#### Testing the security:
```.py
#This program tests the decryption and encryption functions by multiplying the
import library as lib

decrypted_list, items, prices, inventory = lib.decryptor("p4ssw0rd")
print(inventory)

inventory = [inventory[n]*2 for n in range(len(items))]
lib.encryptor(items, prices, inventory)

decr = lib.decryptor("p4ssw0rd")
print(decr[3])
```
  
## Criteria D: Functionality
-This is a video-

## Criteria E: Evaluation
