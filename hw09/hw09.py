import time
def foo(x,y,z):
    result=str(x+y)
    return result+z

def wrapper(f):
    def inner(x,y,z):
        return f(x,y,z)
    return inner

closure = wrapper(foo)
print closure(-2,3,'hello')

def timerLog(f):
    def inner(x):
        start=time.time()
        f(x)
        return time.time()-start
    return inner

@timerLog
def test(x):
    return x*2

print test(2)

def nameArg(f):
    def inner(x):
        return f.func_name+"("+str(x)+")"
    return inner

@nameArg
def test2(x):
    return x+x

print test2(3)

def make_bold(fn):
    return lambda:"<b>"+fn()+"</b>"

def make_italic(fn):
    return lambda:"<i>"+fn()+"</i>"

@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML=hello()
print helloHTML
