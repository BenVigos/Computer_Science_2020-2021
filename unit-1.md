# Unit-1 a electronic hardware store

## Criteria A: Planning

### Context of the problem:
There is a 1,000 y.o. hardware store in Karuizawa, run by Mr Sakamoto. The owner wants to update his accounting software. At the moment everything is kept on paper. He would like to have a software application to replace his accounting book. Mr Sakamoto just got a new macbook.

### Justification of the solution:
**Here we will write the design statement: How, where, why**

## Development:

###First test for a text based store:
```
from datetime import datetime
date=datetime.today()
name=input("Hello, what is your name? ")
print("Welcome to Mr Sakamoto's store {}".format(name))
#print("The time is: {}".format(date))
print("""
Today's deals:
1. RAM   
2. CPU
3. Motherboard
4. GPU
=================
"""
)

while True:
  option=input("select an option 1-4: ")
  if option=="1":
    print("RAM")
    break
  elif option=="2":
    print("CPU")
    break
  elif option=="3":
    print("Motherboard")
    break
  elif option=="4":
    print("GPU")
    break
  else:
    print("The item number {} does not exist".format(option))
  ```
