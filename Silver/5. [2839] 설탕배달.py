import sys
N = int(sys.stdin.readline())
i=-1
count=0
while N>0:
    if N == 4:
        break

    if N % 5 !=0:
        N = N - 3
        count+=1
        if N == 4:
            break
        if N == 0 :
            break
    if N % 5 == 0:
        N = N-5
        count+=1
        if N==4 :
            break
        if N==0:
            break
if N != 4:
    print(count)
# 4일 경우 -1
else:
    print(i)

# TEST
# input
# 18

# ouput
# 4