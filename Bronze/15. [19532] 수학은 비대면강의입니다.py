import sys
number_list = list(map(int,sys.stdin.readline().split()))

for i in range(-999,1000):
    for j in range(-999,1000):
        if(number_list[0] * i + number_list[1] * j == number_list[2] and number_list[3] * i + number_list[4] * j == number_list[5]):
             print(i,j)

# TEST 
# input
# 1 3 -1 4 1 7

# output
# 2 -1