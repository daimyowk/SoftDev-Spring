#Javis Wu
#SoftDev2 Pd6
#HW06 -- Lab(list comprehensions
#2016-03-31
nums=[]
for x in range(8):
    nums.append(x)

squares=[]
for x in range(8):
    squares.append(x**2)

print [x for x in range(8)]
print [x*x for x in range(8)]
print [(x,x*x,x*x*x) for x in range(8)]

p="myNoobPass1234"
print [x for x in p] #list with element of each letter
print [x for x in "1234"]# list with elements 1,2,3,4

UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

print [x for x in p if x in UC_LETTERS] #list with things that are in both p and UC LETTERS

print [1 for x in p if x in UC_LETTERS] #puts one in a list for number of times that something(x) in p is in UC_LETTERS

print [1 if x in UC_LETTERS else 0 for x in p] #looks each thing in p. if that thing is in UC_LETTERS put a 1 in the list if not put a 0

def passCheck(x):
    userPass=x
    UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC_LETTERS="abcdefghijklmnopqrstuvwxyz"
    numbers="0123456789"
    validity = [1  
                if x in UC_LETTERS 
                else 2 if x in LC_LETTERS 
                else 3 if x in numbers 
                else 0
                for x in userPass]
    if 1 in validity and 2 in validity and 3 in validity:
        return True
    else:
        return False

print passCheck("check") #false
print passCheck("ad2d2")#false
print passCheck("AD221dawd") #true

def strengthCheck(p):
    UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC_LETTERS="abcdefghijklmnopqrstuvwxyz"
    numbers="0123456789"
    l = [1 if x in UC_LETTERS else
         2 if x in LC_LETTERS else
         3 if x in NUMBERALS else
         0 for x in p]
    return 1 in l and 2 in l and 3 in l

p2="password"
p3="passw0rd"
p4="Password"
 
def passStrength(x):
    userPass=x
    UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC_LETTERS="abcdefghijklmnopqrstuvwxyz"
    numbers="0123456789"
    special=".?!&#,;:-_*"
    strength=0
    validity = [1  
                if x in UC_LETTERS 
                else 2 if x in LC_LETTERS 
                else 3 if x in numbers
                else 4 if x in special
                else 0
                for x in userPass]
    if 1 in validity:
        strength+=1
    if 2 in validity:
        strength+=1
    if 3 in validity:
        strength+=1
    if 4 in validity:
        strength+=2
    if len(validity)>3:
        strength+=1
    if len(validity)>6:
        strength+=1
    if len(validity)>10:
        strength+=1
    if abs(validity.count(1)-validity.count(2))<3 and validity.count(1)>0 and validity.count(2)>0:
        strength+=1
    if validity.count(3)>3:
        strength+=1
    return strength

print passStrength("password") # returns 3
print passStrength("ulTTimATePa55!!!1337*") #returns 10
print passStrength("a") # returns 1
print passStrength("SLeepMuchNeeded!1")# returns 8
print passStrength("donZo") # returns 3
print passStrength("FinisLine8") # returns 5

    
    


