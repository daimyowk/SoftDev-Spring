def inc(x):
    return x+1

f = inc
print f(10)

def h(x):
    return lambda y: x + y

print h(1) # y not defined. gives back the memory location of the function
print h(2) # same as h(1). same memory location since same function
print h(1)(3) # y defined. does the function x+y so 1+3 gives 4
print h(2)(5) # y defined. does function x+y 2+5

b=h(1)
print b # once again y not defined, so gives back memory location. still
        # same as before since still same lambda function
        # h(1) and h(2) exact same so they also closeures

def f(x):
    def g(y):
        return x+y
    return g

print f(1) # returning a function so it just gives the memory location. g isnt given a y. so the function is returned
print f(2) # once again returns memory location same as f(1)
print f(1)(3) #g is given a variable now. so it does g(3) basically, giving 4
print f(2)(5) #same a before. basiclly g(5), giving 7

def repeat(x):
        def times(y):
            return x*y
        return times

r1=repeat('hello')
r2=repeat('goodbye')

print r1(2)
print r2(2)
print repeat('cool')(3)



