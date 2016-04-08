def quicksort(case):
    if len(case)<=1:
        return case
    pivot=case[len(case)/2]
    lower=[]
    upper=[]
    hold= [1 
           if y==pivot  
           else 2 if y>pivot
           else 0 if y<pivot
           else 3 
           for y in case
           ]
    upper=[x for x in case
           if x>=pivot]
    lower=[x for x in case
           if x<pivot]
    upper.remove(pivot)
    return quicksort(lower)+[pivot]+quicksort(upper)

print quicksort([1,4,2])
print quicksort([1,151,123,32])
print quicksort([11,11,11,32,11])


