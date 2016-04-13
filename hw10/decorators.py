import time
from functools import wraps
def timerLog(f):
    @wraps(f)
    def inner1(*arg):
        start=time.time()
        a = f(*arg)
        print "execution time:"+str(time.time()-start)
        return a 
    return inner1
def name_log(f):
    @wraps(f)
    def inner2(*arg):
	print  f.func_name + "(" + str(*arg) + ")"
	return f(*arg)
    return inner2
