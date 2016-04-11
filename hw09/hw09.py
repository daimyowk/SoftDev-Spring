def foo(x,y,z):
    result=str(x+y)
    return result+z

def wrapper(f):
    def inner(x,y,z):
        return f(x,y,z)
    return inner

closure = wrapper(foo)
print closure(-2,3,'hello')

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
