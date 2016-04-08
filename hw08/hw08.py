def union(a,b):
    addedon=[x for x in b
             if x not in a]
    return a+addedon

print union([1,2,3],[2,3,4])
print union([214,115,123,12412414,211,12],[123,1])

def intersection(a,b):
    return [x for x in a
            if x in b]
    
print intersection([1,2,3],[2,3,4])
print intersection([1,141,12],[124,4])
print intersection([2,21,4,2],[21,2,2])

def setDifference(a,b):
    return [x for x in a
            if x not in b]

print setDifference([1,2,3],[2,3,4])
print setDifference([2,3,4],[1,2,3])
print setDifference([12,124,151,12],[12])
print setDifference([13,321,14,111],[111,14])

def symmDifference(a,b):
    return setDifference(union(a,b),intersection(a,b))

print symmDifference([1,2,3],[2,3,4])
print symmDifference([1,41,52,3223,22],[1,3,15,22])
print symmDifference([],[])
print symmDifference([1],[])

def cartProduct(a,b):
    return [[x,y] for x in a
            for y in b]

print cartProduct([1,2],['red','white'])
print cartProduct([1,2,3,4,5,6],['yo','yup','yam'])
print cartProduct([9,8,7],[1,2,7])
