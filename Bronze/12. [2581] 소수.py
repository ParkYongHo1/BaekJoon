import sys

M = int(sys.stdin.readline())
N = int(sys.stdin.readline())
cnt=0
number_list = []

for i in range(M,N+1):
    for j in range(1,i+1):
        if(i % j == 0 ):    
            cnt+=1
    if(cnt == 2):
        number_list.append(i)
    cnt=0

if(len(number_list) == 0):
    print(-1)
else:
    print(sum(number_list))
    print(min(number_list))

# TEST

# input
# 60
# 100

# output
# 620
# 61
