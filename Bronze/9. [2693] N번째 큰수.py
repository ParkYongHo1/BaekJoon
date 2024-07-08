import sys

T = int(sys.stdin.readline())

N = 3
for _ in range(T):
    number_list = list(map(int,sys.stdin.readline().split()))
    if(len(number_list) != 10):
        print("10개의 숫자를 입력해주세요")
    else:
        number_list.sort()
        number_list.reverse()
        print(number_list[N-1])

# TEST

# input 
# 2
# 1 2 3 4 5 6 7 8 9 1000
# 338 304 619 95 343 496 489 116 98 127

# output 
# 8
# 489