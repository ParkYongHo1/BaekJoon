import sys
N,M = map(int,sys.stdin.readline().split())
number_list = list(map(int,sys.stdin.readline().split()))
number_list.sort(reverse=True)
res =[]
for i in range(N):
    for j in range(i+1,N):
        for k in range(j+1,N):
            sum = number_list[i] +number_list[j] +number_list[k]
            if(sum <= M):
                res.append(sum)
print(max(res))
                
# TEST
# input
# 5 21
# 5 6 7 8 9

# output 
# 21