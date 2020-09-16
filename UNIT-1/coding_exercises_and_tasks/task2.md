# This is the second task

## Questions: 

### Question 1

1. Decomposition is the ability to break a complex problem down to smaller, easier to understand parts.
1. Pattern recognition is the ability to find similarities between different problems and applying the same/similar solutions.
1. Abstraction is being able to focus on the parts that matter and ignore the others.
1. Algorithmic thinking is the ability to generate a series of simple steps that everyone can follow to solve the problem.

### Question 2

* Sierra is only the second most powerfull computer
* It occupies 7000ft²
* it will be used to simulate and predict real life situations involving nuclear bombs.
* A lot of suoercomputers seem tobe named after mountains

### Question 3
Developing super computers has a lot of benefits but can also have a lot of downsides. We could harness super computers' power to find answers to some of the most important questions we have today, for example a super computer could find the cure to cancer or fing the secrets of our universe. But a lot of supercomputers are not being used for good, they are being used to develop and test weapons. This is one of the biggest negatives of havung supercomputers, that as much as they can do good they can also do harm. Even though there is a certain risk factor involved with developing super computers I think that the possible benefits are way larger so we should continue to do it.

### Question 4
The most powerful computer in Japan is called Fugaku and it happens to be the most powerful supercomputer in the world sicne June 2020, carrying out 2,8 times more calculations than a IBM supercomputer called Sumit that until then was the most powerful computer in the world. Fugaku is located in the RIKEN Centre for Computational Science in Kobe, Japan. It has not officially been set in operation yet, but it has been used to conduct molecule-level simulations for drugs (medicine), the possibility of it being used to speed up clinical trials of COVID-19 treatments is also being considered, and a lot of Scientists are hoping that Fugaku can be used to simulate the impact of Major Earthquakes and Tsunami according to Japantimes.co. Fugaku consists of 396 racks, each rack contains 384 processing nodes, with a Fujitsu A64FX CPU which has 48 cores. In total, Fugaku has 158,976 CPU's which works out to over 7 million CPU cores. It got a score of 415.53 petaflops (10¹⁵) in the benchmark test called LINPACK, but this incredible performance comes with some drawbacks, this computer pulls 28.3MW, this is 28,300,000W, of power (a normal computer needs around 500W). Lastly, Fugaku's operating system is a custom Lynux-based Kernel system. Overall, this computer is incredible, and can advance science tremendously.

## Tasks:

### Task 1
```.py
colours = ["red", "white", "yellow", "blue"]

for i in range(4,2404):
    print("locker {}. {}".format(i-3,colours[i%4]))
```

### Task 2
```.py
inp = int(input("What number locker are you looking for? "))

colours = ["red", "white", "yellow", "blue"]
for i in range(4,2404):
    print("locker {}. {}".format(i-3,colours[i%4]))

print()
print("Locker number {} should be painted {}.".format(inp, colours[(inp+3)%4]))
```

### Task 3
```.py
colours = ["red", "white", "yellow", "blue"]
x=0
while x==0:
    inp = input("What colour are you looking for? ")
    for i in range(4):
        if inp==colours[i]:
            x+=1
            mod = i

    if x==0:
        print()
        print('Invalid input, please enter "red", "white", "yellow" or "blue"')
        print()
print()
print("The following lockers need to be painted {}:".format(inp))

for x in range(4,2404):
    if x%4==mod:
        print("locker",x-3)
```
