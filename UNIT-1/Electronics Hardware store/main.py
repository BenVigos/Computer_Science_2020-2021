#This is my electronics hardware store!

#Before you start open a new python file and put the library content into it. Also open a .txt file and put the encrypted store data into it (name it It can be found on Github under the
#"Securing the database" section

#(use username: ben and password: p4ssw0rd)

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