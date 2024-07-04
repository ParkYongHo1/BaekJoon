import sys


N = int(sys.stdin.readline())
list=[]
for i in range(N+1):
    if(i<2):
        list.append(i)
    else:
        list.append(list[i-1]+list[i-2])
print(list[-1])

# TEST
# input
# 10

# ouput
# 55