import sys
N = int(sys.stdin.readline())

arr = []
for i  in range(N):
    x,y = map(int,sys.stdin.readline().split())
    arr.append([y,x])
sort_arr = sorted(arr)
for y,x in sort_arr:
    print(x, y)

# TEST
# input
# 5
# 0 4
# 1 2
# 1 -1
# 2 2
# 3 3

# output
# 1 -1
# 1 2
# 2 2
# 3 3
# 0 4