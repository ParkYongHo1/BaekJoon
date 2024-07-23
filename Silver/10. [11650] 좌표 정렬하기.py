import sys
N = int(sys.stdin.readline())
num_list = []

for _ in range(N):
    [x,y] = (map(int,sys.stdin.readline().split()))
    num_list.append([x,y])

num_list.sort()

for i in num_list:
    print(i[0], i[1])

# TEST
# input
# 5
# 3 4
# 1 1
# 1 -1
# 2 2
# 3 3

# output
# 1 -1
# 1 1
# 2 2
# 3 3
# 3 4