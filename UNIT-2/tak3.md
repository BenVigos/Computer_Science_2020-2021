# Task 3

## Snakify questions

### Q1 Given three different integers, print YES if they're given in ascending order, print NO otherwise.
```.py
a=int(input())
b=int(input())
c=int(input())

if a<b<c:
    print("YES")
    
else:
    print("NO")
```

### Q2 Given an integer, print "YES" if it's a three-digit number and print "NO" otherwise.
```.py
x = int(input())

if x>99 and x<1000:
    print("YES")
    
else:
    print("NO")
```

### Q3 Given three integers, print the smallest value.
```.py
a = int(input())
b = int(input())
c = int(input())

if a<=b and b<=c or a<=c and c<=b:
    print(a)
    
elif b<=a and a<=c or b<=c and c<=a:
    print(b)
    
else:
    (print(c))
```

### Q4 Given three integers, determine how many of them are equal to each other. The program must print one of these numbers: 3 (if all are the same), 2 (if two of them are equal to each other and the third is different) or 0 (if all numbers are different).
```.py
a = int(input())
b = int(input())
c = int(input())
x=1

if a==b:
    x+=1

if b==c:
    x+=1

if a==c:
    x+=1
    
if a!=b and b!=c and a!=c or a==b and b==c and a==c:
    x-=1

print(x)
```

### Q5 Chess rook moves horizontally or vertically. Given two different cells of the chessboard, determine whether a rook can go from the first cell to the second in one move.
```.py
aX = int(input())
aY = int(input())
bX = int(input())
bY = int(input())

if aX==bX or aY==bY:
    print("YES")
    
else:
    print("NO")
```

### Q6 Given a square of a chessboard. Print BLACK if it's black and print WHITE otherwise.
```.py
x = int(input())
y = int(input())

if x%2==y%2:
    print("BLACK")
    
else:
    print("WHITE")
```

### Q7 Given two cells of a chessboard. If they are painted in one color, print the word YES, and if in a different color - NO.
```.py
a = int(input())+int(input())
b = int(input())+int(input())

if a%2 == b%2:
    print("YES")
    
else:
    print("NO")
```

### Q8 Given the coordinates of the three points A, B, and C on a line. Print a distance from the point A to closest point to it.
```.py
a = int(input())
b = int(input())
c = int(input())

if abs(b-a)<=abs(c-a):
    print(abs(b-a))
    
else:
    print(abs(c-a))
```

### Q9 Given a three-digit integer, print YES if its digits go in ascending order, print NO otherwise.
```.py
n=int(input())

c=n%10
a=int(n/10)
b=a%10
a=a//10

if a<=b and b<=c:
    print("YES")
    
else:
    print("NO")
```

### Q10 A palindrome is a number which reads the same when read forward as it it does when read backward. Given a four-digit integer, print "YES" if it's a palindrome and print "NO" otherwise.
```.py
n=str(input())
nr=n[3]+n[2]+n[1]+n[0]

if nr==n:
    print("YES")
    
else:
    print("NO")
```

### Q11 Chess king moves horizontally, vertically or diagonally to any adjacent cell. Given two different cells of the chessboard, determine whether a king can go from the first cell to the second in one move.
```.py
aX = int(input())
aY = int(input())
bX = int(input())
bY = int(input())

if abs(aX-bX)<=1 and abs(aY-bY)<=1:
    print("YES")
    
else:
    print("NO")
```

### Q12 Chess queen moves horizontally, vertically or diagonally to any number of cells. Given two different cells of the chessboard, determine whether a queen can go from the first cell to the second in one move.
```.py
aX = int(input())
aY = int(input())
bX  = int(input())
bY = int(input())

if abs(aX-bX)==abs(aY-bY) or aX==bX or aY==bY:
    print("YES")

else:
    print("NO")
```
