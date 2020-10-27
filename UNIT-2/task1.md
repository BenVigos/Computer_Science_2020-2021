#This program helps person B find person A's number
#It then plays the game 10000 times and finds the average number of itterations it took to find person A's number

import random

tot_it = 0

for i in range(10000):

    num = random.randint(0,100)
    print("the num is", num)
    x = 50
    it = 0
    print(x)

    while True:
        it+=1
        if x==num:
            print("this is the number")
            break

        elif x>num:
            print("lower")

            if (50/2**it)>1:
                x = int(x-50/2**it)

            else:
                x -= 1

            print(x)

        else:
            print("higher")

            if (50 / 2 ** it) > 1:
                x = int(x + 50 / 2 ** it)

            else:
                x += 1

            print(x)

    print("{} itterations".format(it))
    tot_it += it
    print("")

print("It took {} itterations on average".format(tot_it/10000))
